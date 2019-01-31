import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardView,Response } from '../models/models'

@Component({
  selector: 'app-mat-sort-table',
  templateUrl: './mat-sort-table.component.html',
  styleUrls: ['./mat-sort-table.component.css']
})
export class MatSortTableComponent implements AfterViewInit  {
  
  dashboardHistoryListColumns = ['Date', 'C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo']
  dashboardDataSource: MatTableDataSource<DashboardView>
  
  // displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDatabase | null;
  data: DashboardView[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngAfterViewInit () {
    this.exampleDatabase = new ExampleHttpDatabase(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            // this.sort.active, this.sort.direction, this.paginator.pageIndex
            "1",this.paginator.pageIndex,3);
        }),
        map(data => {
          if(data && data.status == 'SUCCESS'){
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.data = data.resp;
            
            this.dashboardDataSource.data = data.resp
            this.resultsLength = this.data.length;
          }
          return data.resp;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

}

// export interface GithubApi {
//   items: GithubIssue[];
//   total_count: number;
// }

// export interface GithubIssue {
//   created_at: string;
//   number: string;
//   state: string;
//   title: string;
// }

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private http: HttpClient) {}

  getRepoIssues(patientId: string = "1", page: number, size: number = 5): Observable<Response> {
    const href = 'http://localhost:12000/my-portal/dashboard/get-dashboard';
    const requestUrl =
        `${href}?patientId=${patientId}&page=${page + 1}&size=${size}`;

    return this.http.get<Response>(requestUrl);
  }
}
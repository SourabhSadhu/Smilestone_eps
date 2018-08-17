
$(function () {
    // 6 create an instance when the DOM is ready
    $('#jstree').jstree();
    // 7 bind to events triggered on the tree
    $('#jstree').on("changed.jstree", function (e, data) {
      console.log(data.selected);
    });
    // 8 interact with the tree - either way is OK
    $('button').on('click', function () {
      $('#jstree').jstree(true).select_node('child_node_1');
      $('#jstree').jstree('select_node', 'child_node_1');
      $.jstree.reference('#jstree').select_node('child_node_1');
    });
  });

$('#using_json_2')
				  .on('changed.jstree', function (e, data) {
					  console.log(e + " :: " + data);
				    var i, j, r = [];
				    for(i = 0, j = data.selected.length; i < j; i++) {
				      r.push(data.instance.get_node(data.selected[i]).text);
				    };
				    $('#event_result').html('Selected: ' + r.join(', '));
				  })
				  .jstree({ 'core' : {
					    'data' : [
					       { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
					       { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
					       { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
					       { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" },
					       { "id" : "ajson5", "parent" : "ajson4", "text" : "Child 1" },
					       { "id" : "ajson6", "parent" : "ajson4", "text" : "Child 1" },
					       { "id" : "ajson7", "parent" : "ajson4", "text" : "Child 1" },
					       { "id" : "ajson8", "parent" : "ajson4", "text" : "Child 1" }
					    ]
					} });
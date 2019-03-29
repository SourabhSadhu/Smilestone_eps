

ALTER SEQUENCE rx_plan_seq RESTART WITH 1
    
INSERT INTO eps.age_group values
('3to10',3,10),
('10to30',10,30),
('30to60',30,60),
('60to90',60,90),
('90to150',90,150);


INSERT INTO eps.clinical_findings values 
(1,'Caries','desc Caries'),
(2,'Periodontities','desc Periodontities'),
(3,'Grossly decayed','desc Grossly decayed'),
(4,'Root stump','desc Root stump'),
(5,'Attrition','desc Attrition'),
(6,'Cervical abrasion','desc Cervical abrasion'),
(7,'Missing tooth','desc Missing tooth'),
(8,'Calculus','desc Calculus'),
(9,'Stain','desc Stain'),
(10,'Unknown','Not known');

INSERT INTO eps.treatment_plan values
(1,'RCT','Root canal treatment',1),
(2,'RCT','Root canal treatment',4),
(3,'Extraction','Extraction',3),
(4,'Oral prophylaxis','Oral prophylaxis',10),
(5,'Restoration','Restoration statined teeth',9),
(6,'Prosthesis','Prosthesis removable',10),
(7,'Prosthesis','Prosthesis fixed',10),
(8,'Prosthesis','Prosthesis implant',10),
(9,'RCT','Root canal treatment',10);

--TO GET treatment plan based on clinical findings
select * from eps.treatment_plan where clinical_finding in (select f_id from clinical_findings where f_name = 'Unknown')

--TO GET clinical findings based on treatment plan
select * from clinical_findings where f_id in (select trt_id from eps.treatment_plan where trt_name = 'RCT')

INSERT INTO eps.medical_history_master (medical_history_name) values
('Hyperglycaemia'),
('Hypertension'),
('Hypotension'),
('Asthma'),
('Cerebro vascular accident'),
('Cardiac diseases'),
('Hypothyroidism'),
('Hyperthyroidism'),
('Drug hypersensitivity');

INSERT INTO tooth_quadrent values
('11','1','1','1'),
('12','1','2','1'),
('13','1','3','2'),
('14','1','4','2'),
('15','1','5','3'),
('16','1','6','3'),
('17','1','7','4'),
('18','1','8','4'),
('21','2','1','1'),
('22','2','2','1'),
('23','2','3','2'),
('24','2','4','2'),
('25','2','5','3'),
('26','2','6','3'),
('27','2','7','4'),
('28','2','8','4'),
('31','3','1','1'),
('32','3','2','1'),
('33','3','3','2'),
('34','3','4','2'),
('35','3','5','3'),
('36','3','6','3'),
('37','3','7','4'),
('38','3','8','4'),
('41','4','1','1'),
('42','4','2','1'),
('43','4','3','2'),
('44','4','4','2'),
('45','4','5','3'),
('46','4','6','3'),
('47','4','7','4'),
('48','4','8','4');

INSERT INTO fee_config (treatment_plan_id,base_fee,tooth_group_id,tooth_group_percent,age_group_id,age_group_percent) values 
(1,50,1,10,'3to10',10),
(1,50,2,10,'3to10',10),
(1,50,3,10,'3to10',10),
(1,50,4,10,'3to10',10),
(1,60,1,10,'10to30',10),
(1,60,2,10,'10to30',10),
(1,60,3,10,'10to30',10),
(1,60,4,10,'10to30',10),
(1,75,1,10,'30to60',10),
(1,75,2,10,'30to60',10),
(1,75,3,10,'30to60',10),
(1,75,4,10,'30to60',10);






--Changes after first deployment

ALTER TABLE eps.medicine_history
    ADD COLUMN ts_created timestamp without time zone;
    
ALTER TABLE eps.fees_breakup
    RENAME payment_ts TO ts_updated;    
    
    
-- Changes on 17-02-19
delete from eps.medicine_master;
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Augmentin 625mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Clavum 625mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Cap.Mox.500mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Flagyl 400 mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Hifenac-P','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Ketorol DT','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Pan 40mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Azithral500mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Tabaz-i','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Lynx500mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab./Cap.Dox TSL','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Taxim200','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Ceftas CL200','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Levoflox 500mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Pan D','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Alprax 0.25','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Zolfresh 5mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Zolfresh 10mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Myospaz Forte','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Paracetamol 650mg','','',0,'10to30',1,'');
insert into eps.medicine_master (medicine_name,disease_code,disease_name,clinical_availability,age_group,treatment_id,dosage) values('Tab.Paracetamol 500 mg','','',0,'10to30',1,'');    




-- Release 2.0
-- Start date 27-03-1992
insert into eps.treatment_plan (trt_id,trt_name, trt_desc, clinical_finding) values (8,'Other', 'Custom entry', 1);
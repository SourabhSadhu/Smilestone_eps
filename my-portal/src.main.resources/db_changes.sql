-- Table: eps.medical_history

-- DROP TABLE eps.medical_history;

CREATE TABLE eps.medical_history
(
    disease_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    disease_from timestamp without time zone,
    severity character varying(50) COLLATE pg_catalog."default",
    note character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT medical_history_pkey PRIMARY KEY (disease_name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE eps.medical_history
    OWNER to postgres;
    
select * from eps.age_group;
insert into eps.age_group values('3to10',3,10);
insert into eps.age_group values('10to30',10,30);
insert into eps.age_group values('30to60',30,60);
insert into eps.age_group values('60to90',60,90);
insert into eps.age_group values('90to150',90,150);
commit;

SELECT * FROM eps.medical_history
-- DELETE FROM eps.medical_history
INSERT INTO eps.medical_history (disease_name) values
('Hyperglycaemia'),
('Hypertension'),
('Hypotension'),
('Asthma'),
('Cerebro vascular accident'),
('Cardiac diseases'),
('Hypothyroidism'),
('Hyperthyroidism'),
('Drug hypersensitivity');
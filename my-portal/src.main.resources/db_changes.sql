CREATE SEQUENCE eps.medical_history_id_seq;

ALTER SEQUENCE eps.medical_history_id_seq
    OWNER TO postgres;	

-- Table: eps.medical_history_master

-- DROP TABLE eps.medical_history_master;

CREATE TABLE eps.medical_history_master
(
    medical_history_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT medical_history_master_pkey PRIMARY KEY (medical_history_name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE eps.medical_history_master
    OWNER to postgres;
    
    
-- Table: eps.medical_history

-- DROP TABLE eps.medical_history;

CREATE TABLE eps.medical_history
(
    medical_history_id bigint NOT NULL DEFAULT nextval('eps.medical_history_id_seq'::regclass),
    patient_id bigint NOT NULL,
    medical_history_name character varying(100),
    started_from timestamp without time zone,
    severity character varying(50),
    note character varying(200),
    CONSTRAINT medical_history_p_key PRIMARY KEY (medical_history_id),
    CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id)
        REFERENCES eps.patients (p_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT medical_history_name_f_key FOREIGN KEY (medical_history_name)
        REFERENCES eps.medical_history_master (medical_history_name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
);	
    
select * from eps.age_group;
insert into eps.age_group values('3to10',3,10);
insert into eps.age_group values('10to30',10,30);
insert into eps.age_group values('30to60',30,60);
insert into eps.age_group values('60to90',60,90);
insert into eps.age_group values('90to150',90,150);
commit;

SELECT * FROM eps.medical_history_master
-- DELETE FROM eps.medical_history
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

ALTER TABLE eps.prescription_history
    ADD COLUMN medical_histories character varying(300);
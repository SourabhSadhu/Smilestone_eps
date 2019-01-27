--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

-- Started on 2019-01-20 21:43:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE eprescription;
--
-- TOC entry 2950 (class 1262 OID 16393)
-- Name: eprescription; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE eprescription WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';


ALTER DATABASE eprescription OWNER TO postgres;

\connect eprescription

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 16398)
-- Name: eps; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA eps;


ALTER SCHEMA eps OWNER TO postgres;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2953 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 206 (class 1259 OID 16576)
-- Name: age_group; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.age_group (
    group_id character varying(10) NOT NULL,
    from_age numeric(3,0) NOT NULL,
    to_age numeric(3,0) NOT NULL
);


ALTER TABLE eps.age_group OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16399)
-- Name: findings_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.findings_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.findings_seq OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16588)
-- Name: clinical_findings; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.clinical_findings (
    f_id bigint DEFAULT nextval('eps.findings_seq'::regclass) NOT NULL,
    f_name character varying(50) NOT NULL,
    f_desc character varying(100)
);


ALTER TABLE eps.clinical_findings OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16760)
-- Name: fee_config_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.fee_config_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.fee_config_id_seq OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16762)
-- Name: fee_config; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.fee_config (
    fee_config_id bigint DEFAULT nextval('eps.fee_config_id_seq'::regclass) NOT NULL,
    treatment_plan_id numeric,
    base_fee numeric(6,2),
    tooth_group_id numeric(3,0),
    tooth_group_percent numeric(5,2),
    age_group_id character varying(10),
    age_group_percent numeric(5,2)
);


ALTER TABLE eps.fee_config OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16538)
-- Name: fees_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.fees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.fees_id_seq OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16540)
-- Name: fees_breakup; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.fees_breakup (
    f_id bigint DEFAULT nextval('eps.fees_id_seq'::regclass) NOT NULL,
    prescription_id bigint NOT NULL,
    patient_id bigint NOT NULL,
    notes character varying(50),
    amount numeric(8,0) NOT NULL,
    ts_created timestamp without time zone NOT NULL,
    trtmnt_plan_ref bigint,
    amount_paid numeric(8,0),
    payment_ts timestamp without time zone
);


ALTER TABLE eps.fees_breakup OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16674)
-- Name: medical_history_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.medical_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.medical_history_id_seq OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16676)
-- Name: medical_history; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.medical_history (
    medical_history_id bigint DEFAULT nextval('eps.medical_history_id_seq'::regclass) NOT NULL,
    patient_id bigint NOT NULL,
    medical_history_name character varying,
    started_from timestamp without time zone,
    severity character varying(50),
    note character varying(200),
    prescription_id bigint
);


ALTER TABLE eps.medical_history OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16669)
-- Name: medical_history_master; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.medical_history_master (
    medical_history_name character varying(100) NOT NULL
);


ALTER TABLE eps.medical_history_master OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16751)
-- Name: medicine_history_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.medicine_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.medicine_history_id_seq OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16738)
-- Name: medicine_history; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.medicine_history (
    medicine_name character varying(50) NOT NULL,
    disease_code character varying(20),
    disease_name character varying(20),
    dosage character varying(80),
    prescription_id bigint NOT NULL,
    patient_id bigint NOT NULL,
    med_id bigint DEFAULT nextval('eps.medicine_history_id_seq'::regclass) NOT NULL
);


ALTER TABLE eps.medicine_history OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16796)
-- Name: medicine_master_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.medicine_master_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.medicine_master_id_seq OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16569)
-- Name: medicine_master; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.medicine_master (
    medicine_name character varying(50) NOT NULL,
    disease_code character varying(20) NOT NULL,
    disease_name character varying(20),
    clinical_availability numeric(3,0),
    age_group character varying(50) NOT NULL,
    treatment_id bigint NOT NULL,
    dosage character varying(100) NOT NULL,
    medicine_id bigint DEFAULT nextval('eps.medicine_master_id_seq'::regclass) NOT NULL
);


ALTER TABLE eps.medicine_master OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16775)
-- Name: patient_case_history_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.patient_case_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.patient_case_history_id_seq OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16777)
-- Name: patient_case_history_image; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.patient_case_history_image (
    case_history_id bigint DEFAULT nextval('eps.patient_case_history_id_seq'::regclass) NOT NULL,
    patient_id bigint NOT NULL,
    prescription_id bigint NOT NULL,
    ts_created timestamp without time zone,
    ts_diagnosed timestamp without time zone,
    case_history_image_uri character varying(200)
);


ALTER TABLE eps.patient_case_history_image OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16403)
-- Name: patient_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.patient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.patient_id_seq OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16654)
-- Name: patients; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.patients (
    p_id bigint DEFAULT nextval('eps.patient_id_seq'::regclass) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    dob_dd numeric(2,0) NOT NULL,
    dob_mm numeric(2,0) NOT NULL,
    dob_yy numeric(4,0) DEFAULT 1947 NOT NULL,
    contact_no1 numeric(15,0) NOT NULL,
    contact_no2 numeric(15,0),
    discount numeric(2,0) DEFAULT 0,
    ts_created timestamp without time zone,
    blood_group character varying(3),
    weight integer,
    image bytea,
    email character varying(40),
    address1 character varying(100),
    address2 character varying(100),
    height integer,
    sex character varying(6),
    dob_timestamp bigint,
    discount_type character varying
);


ALTER TABLE eps.patients OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16405)
-- Name: prescription_id_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.prescription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.prescription_id_seq OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16560)
-- Name: prescription_history; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.prescription_history (
    prescription_id bigint DEFAULT nextval('eps.prescription_id_seq'::regclass) NOT NULL,
    chief_complaint character varying(2000),
    provisional_diagnosis character varying(2000),
    advice character varying(2000),
    note character varying(2000),
    investigation character varying(2000),
    patient_id bigint NOT NULL,
    ts_created timestamp without time zone,
    ts_modified timestamp without time zone,
    next_appointment timestamp without time zone,
    visit_count integer,
    clinical_findings character varying(2000),
    printable_notes character varying(2000)
);


ALTER TABLE eps.prescription_history OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16401)
-- Name: rx_plan_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.rx_plan_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.rx_plan_seq OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16509)
-- Name: tooth_quadrent; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.tooth_quadrent (
    tooth_index numeric(2,0) NOT NULL,
    tooth_qdr numeric(1,0) NOT NULL,
    tooth_number numeric(1,0) NOT NULL,
    tooth_group numeric(3,0)
);


ALTER TABLE eps.tooth_quadrent OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16634)
-- Name: treatment_plan; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.treatment_plan (
    trt_id bigint DEFAULT nextval('eps.rx_plan_seq'::regclass) NOT NULL,
    trt_name character varying(50) NOT NULL,
    trt_desc character varying(100),
    clinical_finding bigint NOT NULL
);


ALTER TABLE eps.treatment_plan OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24989)
-- Name: treatment_plan_history_seq; Type: SEQUENCE; Schema: eps; Owner: postgres
--

CREATE SEQUENCE eps.treatment_plan_history_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE eps.treatment_plan_history_seq OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24991)
-- Name: treatment_plan_history; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.treatment_plan_history (
    t_id bigint DEFAULT nextval('eps.treatment_plan_history_seq'::regclass) NOT NULL,
    t_name character varying(100) NOT NULL,
    clinical_finding character varying(200),
    tooth_index character varying(20),
    prescription_id bigint NOT NULL,
    patient_id bigint NOT NULL,
    note character varying(1000),
    ts_created timestamp without time zone,
    ts_modified timestamp without time zone,
    status character varying(10)
);


ALTER TABLE eps.treatment_plan_history OWNER TO postgres;

--
-- TOC entry 2929 (class 0 OID 16576)
-- Dependencies: 206
-- Data for Name: age_group; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('3to10', 3, 10);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('10to30', 10, 30);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('30to60', 30, 60);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('60to90', 60, 90);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('90to150', 90, 150);


--
-- TOC entry 2930 (class 0 OID 16588)
-- Dependencies: 207
-- Data for Name: clinical_findings; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (1, 'Caries', 'desc Caries');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (2, 'Periodontities', 'desc Periodontities');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (3, 'Grossly decayed', 'desc Grossly decayed');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (4, 'Root stump', 'desc Root stump');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (5, 'Attrition', 'desc Attrition');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (6, 'Cervical abrasion', 'desc Cervical abrasion');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (7, 'Missing tooth', 'desc Missing tooth');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (8, 'Calculus', 'desc Calculus');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (9, 'Stain', 'desc Stain');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (10, 'Others', 'other');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (-38, 'Other cf sleep2', 'too much sleepy2');
INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (-37, 'Other cf sleep2', 'too much sleepy2');


--
-- TOC entry 2939 (class 0 OID 16762)
-- Dependencies: 216
-- Data for Name: fee_config; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (13, 1, 50.00, 1, 10.00, '3to10', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (14, 1, 50.00, 2, 10.00, '3to10', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (15, 1, 50.00, 3, 10.00, '3to10', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (16, 1, 50.00, 4, 10.00, '3to10', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (17, 1, 60.00, 1, 10.00, '10to30', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (18, 1, 60.00, 2, 10.00, '10to30', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (19, 1, 60.00, 3, 10.00, '10to30', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (21, 1, 75.00, 1, 10.00, '30to60', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (22, 1, 75.00, 2, 10.00, '30to60', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (23, 1, 75.00, 3, 10.00, '30to60', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (24, 1, 75.00, 4, 10.00, '30to60', 10.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (-24, 2, 89.00, 1, 5.00, '10to30', 30.00);
INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (20, 1, 60.00, 4, 50.00, '10to30', 10.00);


--
-- TOC entry 2926 (class 0 OID 16540)
-- Dependencies: 203
-- Data for Name: fees_breakup; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (45, 40, 1, NULL, 72, '2019-01-01 13:50:07.054', 1, NULL, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (46, 40, 1, 'test', 78, '2019-01-01 13:50:07.054', 2, 10, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (47, 41, 1, 'Test 2', 119, '2019-01-05 11:35:41.872', 2, 55, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (48, 41, 1, 'Test 2.1', 119, '2019-01-05 11:35:41.872', 2, 55, NULL);


--
-- TOC entry 2935 (class 0 OID 16676)
-- Dependencies: 212
-- Data for Name: medical_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (49, 1, 'Asthma', '2019-01-01 13:50:07.069', NULL, NULL, 40);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (50, 1, 'Cardiac diseases', '2019-01-01 13:50:07.069', NULL, NULL, 40);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (51, 1, 'Hypertension', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (52, 1, 'Hypotension', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (53, 1, 'Hyperthyroidism', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (54, 1, 'Drug hypersensitivity', '2019-01-05 11:35:41.951', NULL, NULL, 41);


--
-- TOC entry 2933 (class 0 OID 16669)
-- Dependencies: 210
-- Data for Name: medical_history_master; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hyperglycaemia');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypertension');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypotension');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Asthma');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Cerebro vascular accident');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Cardiac diseases');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypothyroidism');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hyperthyroidism');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Drug hypersensitivity');


--
-- TOC entry 2936 (class 0 OID 16738)
-- Dependencies: 213
-- Data for Name: medicine_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med2', 'dCode2', NULL, 'dose', 40, 1, 27);
INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med1', 'dCode1', 'dName1', 'sokale bikale 1 ta khabar por', 41, 1, 28);
INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med2', 'dCode2', NULL, 'dose', 41, 1, 29);


--
-- TOC entry 2928 (class 0 OID 16569)
-- Dependencies: 205
-- Data for Name: medicine_master; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med1', 'dCode1', 'dName1', 7, '10to30', 1, 'sokale bikale 1 ta khabar por', 1);
INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med2', 'dCode2', NULL, NULL, '10to30', 1, 'dose', 5);
INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med3', 'dCode3', NULL, NULL, '10to30', 1, 'dose', 6);


--
-- TOC entry 2941 (class 0 OID 16777)
-- Dependencies: 218
-- Data for Name: patient_case_history_image; Type: TABLE DATA; Schema: eps; Owner: postgres
--



--
-- TOC entry 2932 (class 0 OID 16654)
-- Dependencies: 209
-- Data for Name: patients; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (-46, 'gourab', 'sadhu', 27, 3, 1992, 9831321400, 7980231838, 0, '2018-09-19 09:12:04.62', 'B+', 80, NULL, NULL, 'Habra Jaigachi Rathtala North 24 Parganas', 'Trying to write a pretty looooooooooooooooooooong text', NULL, NULL, NULL, NULL);
INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (-44, 'ruma', 'sadhu', 17, 8, 1990, 9647167828, NULL, 99, '2018-10-14 22:35:19.412', 'B+', 60, NULL, NULL, 'Habra
Jaigachi
Rathtala
West Bengal', 'North 24 Parganas', 160, 'female', NULL, 'percentage');
INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (1, 'sourabh', 'sadhu', 27, 3, 1992, 9046787913, 7980231838, 20, '2018-08-19 21:41:38.485861', 'B+', 80, NULL, NULL, NULL, NULL, NULL, 'male', 701673000000, NULL);


--
-- TOC entry 2927 (class 0 OID 16560)
-- Dependencies: 204
-- Data for Name: prescription_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.prescription_history (prescription_id, chief_complaint, provisional_diagnosis, advice, note, investigation, patient_id, ts_created, ts_modified, next_appointment, visit_count, clinical_findings, printable_notes) VALUES (40, 'fatal', 'yo yo', 'vice advice', 'test Note', 'test', 1, '2019-01-01 13:50:06.991', NULL, '2019-01-03 00:00:00', 1, 'Nam na jana findings', NULL);
INSERT INTO eps.prescription_history (prescription_id, chief_complaint, provisional_diagnosis, advice, note, investigation, patient_id, ts_created, ts_modified, next_appointment, visit_count, clinical_findings, printable_notes) VALUES (41, 'Test 2', 'Test 2', 'Test 2', 'Test 2', 'Test 2', 1, '2019-01-05 11:35:41.669', NULL, '2019-01-09 00:00:00', 1, 'Nam na jana findings', NULL);


--
-- TOC entry 2924 (class 0 OID 16509)
-- Dependencies: 201
-- Data for Name: tooth_quadrent; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (41, 4, 1, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (42, 4, 2, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (43, 4, 3, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (44, 4, 4, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (35, 3, 5, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (36, 3, 6, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (37, 3, 7, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (38, 3, 8, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (45, 4, 5, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (46, 4, 6, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (12, 1, 2, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (11, 1, 1, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (14, 1, 4, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (13, 1, 3, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (16, 1, 6, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (15, 1, 5, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (18, 1, 8, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (17, 1, 7, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (22, 2, 2, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (21, 2, 1, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (24, 2, 4, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (23, 2, 3, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (26, 2, 6, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (25, 2, 5, 3);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (28, 2, 8, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (27, 2, 7, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (32, 3, 2, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (31, 3, 1, 1);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (34, 3, 4, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (33, 3, 3, 2);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (48, 4, 8, 4);
INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (47, 4, 7, 4);


--
-- TOC entry 2931 (class 0 OID 16634)
-- Dependencies: 208
-- Data for Name: treatment_plan; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (1, 'RCT', 'Root canal treatment', 1);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (2, 'Extraction', 'Extraction', 3);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (3, 'Oral prophylaxis', 'Oral prophylaxis', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (4, 'Restoration', 'Restoration statined teeth', 9);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (5, 'Prosthesis removable', 'Prosthesis removable', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (6, 'Prosthesis fixed', 'Prosthesis fixed', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (7, 'Prosthesis removable', 'Prosthesis implant', 10);


--
-- TOC entry 2944 (class 0 OID 24991)
-- Dependencies: 221
-- Data for Name: treatment_plan_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (9, 'RCT', 'Periodontities', '34', 40, 1, NULL, '2019-01-01 13:50:36.694', NULL, 'Pending');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (8, 'Prosthesis removable', 'Periodontities', '35', 40, 1, 'completed', NULL, '2019-01-03 21:30:27.07', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (10, 'Custom treatment plan', 'manual entry test', '15', 40, 1, 'Testing manual data', '2019-01-03 21:31:21.719', NULL, 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (15, 'Oral prophylaxis', 'Stain', '35', 41, 1, 'Done', NULL, '2019-01-05 11:59:36.629', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (16, 'Prosthesis fixed', 'Stain', '34', 41, 1, 'Note is done', NULL, '2019-01-05 13:51:50.54', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (17, 'Custome entry', 'cilinical', '13', 41, 1, 'test plan', '2019-01-05 13:53:11.999', NULL, 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (18, 'Custom addition 2', 'test cf 2', '22', 41, 1, 'cumtom addition note 2', '2019-01-05 19:05:40.749', NULL, 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (14, 'Restoration', 'Attrition', '31', 41, 1, NULL, NULL, '2019-01-05 19:06:15.812', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (11, 'Prosthesis removable', 'Attrition', '15', 41, 1, 'update', NULL, '2019-01-05 19:16:34.022', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (13, 'Extraction', 'Attrition', '32', 41, 1, 'hope this works', '2019-01-05 11:35:42.076', '2019-01-05 19:47:12.572', 'Completed');
INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (12, 'Extraction', 'Attrition', '21', 41, 1, 'testing', '2019-01-05 19:52:36.115', NULL, 'Completed');


--
-- TOC entry 2954 (class 0 OID 0)
-- Dependencies: 215
-- Name: fee_config_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.fee_config_id_seq', 25, true);


--
-- TOC entry 2955 (class 0 OID 0)
-- Dependencies: 202
-- Name: fees_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.fees_id_seq', 48, true);


--
-- TOC entry 2956 (class 0 OID 0)
-- Dependencies: 197
-- Name: findings_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.findings_seq', 11, true);


--
-- TOC entry 2957 (class 0 OID 0)
-- Dependencies: 211
-- Name: medical_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medical_history_id_seq', 54, true);


--
-- TOC entry 2958 (class 0 OID 0)
-- Dependencies: 214
-- Name: medicine_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medicine_history_id_seq', 29, true);


--
-- TOC entry 2959 (class 0 OID 0)
-- Dependencies: 219
-- Name: medicine_master_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medicine_master_id_seq', 6, true);


--
-- TOC entry 2960 (class 0 OID 0)
-- Dependencies: 217
-- Name: patient_case_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.patient_case_history_id_seq', 1, false);


--
-- TOC entry 2961 (class 0 OID 0)
-- Dependencies: 199
-- Name: patient_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.patient_id_seq', 5, true);


--
-- TOC entry 2962 (class 0 OID 0)
-- Dependencies: 200
-- Name: prescription_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.prescription_id_seq', 41, true);


--
-- TOC entry 2963 (class 0 OID 0)
-- Dependencies: 198
-- Name: rx_plan_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.rx_plan_seq', 1, true);


--
-- TOC entry 2964 (class 0 OID 0)
-- Dependencies: 220
-- Name: treatment_plan_history_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.treatment_plan_history_seq', 18, true);


--
-- TOC entry 2770 (class 2606 OID 16580)
-- Name: age_group age_group_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.age_group
    ADD CONSTRAINT age_group_pkey PRIMARY KEY (group_id);


--
-- TOC entry 2772 (class 2606 OID 16641)
-- Name: clinical_findings clinical_findings_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.clinical_findings
    ADD CONSTRAINT clinical_findings_pkey PRIMARY KEY (f_id);


--
-- TOC entry 2784 (class 2606 OID 16766)
-- Name: fee_config fee_config_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fee_config
    ADD CONSTRAINT fee_config_pkey PRIMARY KEY (fee_config_id);


--
-- TOC entry 2764 (class 2606 OID 16545)
-- Name: fees_breakup fees_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT fees_pkey PRIMARY KEY (f_id);


--
-- TOC entry 2778 (class 2606 OID 16673)
-- Name: medical_history_master medical_history_master_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medical_history_master
    ADD CONSTRAINT medical_history_master_pkey PRIMARY KEY (medical_history_name);


--
-- TOC entry 2780 (class 2606 OID 16684)
-- Name: medical_history medical_history_p_key; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medical_history
    ADD CONSTRAINT medical_history_p_key PRIMARY KEY (medical_history_id);


--
-- TOC entry 2782 (class 2606 OID 16759)
-- Name: medicine_history medicine_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_history_pkey PRIMARY KEY (med_id);


--
-- TOC entry 2768 (class 2606 OID 16795)
-- Name: medicine_master medicine_master_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_master_pkey PRIMARY KEY (medicine_name, age_group, treatment_id, dosage);


--
-- TOC entry 2786 (class 2606 OID 16782)
-- Name: patient_case_history_image patient_case_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.patient_case_history_image
    ADD CONSTRAINT patient_case_history_pkey PRIMARY KEY (case_history_id);


--
-- TOC entry 2766 (class 2606 OID 16568)
-- Name: prescription_history patient_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.prescription_history
    ADD CONSTRAINT patient_history_pkey PRIMARY KEY (prescription_id);


--
-- TOC entry 2776 (class 2606 OID 16663)
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (p_id);


--
-- TOC entry 2762 (class 2606 OID 16513)
-- Name: tooth_quadrent tooth_quadrent_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.tooth_quadrent
    ADD CONSTRAINT tooth_quadrent_pkey PRIMARY KEY (tooth_index);


--
-- TOC entry 2774 (class 2606 OID 16648)
-- Name: treatment_plan treatment_plan_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT treatment_plan_pkey PRIMARY KEY (trt_id);


--
-- TOC entry 2788 (class 2606 OID 24996)
-- Name: treatment_plan_history trtmnt_plan_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_history_pkey PRIMARY KEY (t_id);


--
-- TOC entry 2794 (class 2606 OID 16642)
-- Name: treatment_plan cf_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT cf_f_key FOREIGN KEY (clinical_finding) REFERENCES eps.clinical_findings(f_id);


--
-- TOC entry 2791 (class 2606 OID 16705)
-- Name: fees_breakup clinical_findings_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT clinical_findings_f_key FOREIGN KEY (trtmnt_plan_ref) REFERENCES eps.clinical_findings(f_id);


--
-- TOC entry 2795 (class 2606 OID 16741)
-- Name: medicine_history medicine_hist_prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- TOC entry 2793 (class 2606 OID 16649)
-- Name: medicine_master medicine_trtmnt_plan_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_trtmnt_plan_f_key FOREIGN KEY (treatment_id) REFERENCES eps.treatment_plan(trt_id);


--
-- TOC entry 2792 (class 2606 OID 16581)
-- Name: medicine_master medicines_age_group_fkey; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicines_age_group_fkey FOREIGN KEY (age_group) REFERENCES eps.age_group(group_id);


--
-- TOC entry 2796 (class 2606 OID 16746)
-- Name: medicine_history medicines_hist_patient_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- TOC entry 2798 (class 2606 OID 25002)
-- Name: treatment_plan_history medicines_hist_patient_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- TOC entry 2790 (class 2606 OID 16700)
-- Name: fees_breakup patient_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- TOC entry 2789 (class 2606 OID 16695)
-- Name: fees_breakup prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- TOC entry 2797 (class 2606 OID 24997)
-- Name: treatment_plan_history trtmnt_plan_hist_prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- TOC entry 2952 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2019-01-20 21:43:11

--
-- PostgreSQL database dump complete
--


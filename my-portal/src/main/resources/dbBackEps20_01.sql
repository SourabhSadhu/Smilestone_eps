toc.dat                                                                                             0000600 0004000 0002000 00000061464 13421116654 0014455 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           )                 w            eprescription    10.4    10.4 S    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false         �           1262    16393    eprescription    DATABASE     �   CREATE DATABASE eprescription WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
    DROP DATABASE eprescription;
             postgres    false                     2615    16398    eps    SCHEMA        CREATE SCHEMA eps;
    DROP SCHEMA eps;
             postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false         �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                     3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false         �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1         �            1259    16576 	   age_group    TABLE     �   CREATE TABLE eps.age_group (
    group_id character varying(10) NOT NULL,
    from_age numeric(3,0) NOT NULL,
    to_age numeric(3,0) NOT NULL
);
    DROP TABLE eps.age_group;
       eps         postgres    false    8         �            1259    16399    findings_seq    SEQUENCE     r   CREATE SEQUENCE eps.findings_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE eps.findings_seq;
       eps       postgres    false    8         �            1259    16588    clinical_findings    TABLE     �   CREATE TABLE eps.clinical_findings (
    f_id bigint DEFAULT nextval('eps.findings_seq'::regclass) NOT NULL,
    f_name character varying(50) NOT NULL,
    f_desc character varying(100)
);
 "   DROP TABLE eps.clinical_findings;
       eps         postgres    false    197    8         �            1259    16760    fee_config_id_seq    SEQUENCE     w   CREATE SEQUENCE eps.fee_config_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE eps.fee_config_id_seq;
       eps       postgres    false    8         �            1259    16762 
   fee_config    TABLE     C  CREATE TABLE eps.fee_config (
    fee_config_id bigint DEFAULT nextval('eps.fee_config_id_seq'::regclass) NOT NULL,
    treatment_plan_id numeric,
    base_fee numeric(6,2),
    tooth_group_id numeric(3,0),
    tooth_group_percent numeric(5,2),
    age_group_id character varying(10),
    age_group_percent numeric(5,2)
);
    DROP TABLE eps.fee_config;
       eps         postgres    false    215    8         �            1259    16538    fees_id_seq    SEQUENCE     q   CREATE SEQUENCE eps.fees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE eps.fees_id_seq;
       eps       postgres    false    8         �            1259    16540    fees_breakup    TABLE     �  CREATE TABLE eps.fees_breakup (
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
    DROP TABLE eps.fees_breakup;
       eps         postgres    false    202    8         �            1259    16674    medical_history_id_seq    SEQUENCE     |   CREATE SEQUENCE eps.medical_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE eps.medical_history_id_seq;
       eps       postgres    false    8         �            1259    16676    medical_history    TABLE     `  CREATE TABLE eps.medical_history (
    medical_history_id bigint DEFAULT nextval('eps.medical_history_id_seq'::regclass) NOT NULL,
    patient_id bigint NOT NULL,
    medical_history_name character varying,
    started_from timestamp without time zone,
    severity character varying(50),
    note character varying(200),
    prescription_id bigint
);
     DROP TABLE eps.medical_history;
       eps         postgres    false    211    8         �            1259    16669    medical_history_master    TABLE     f   CREATE TABLE eps.medical_history_master (
    medical_history_name character varying(100) NOT NULL
);
 '   DROP TABLE eps.medical_history_master;
       eps         postgres    false    8         �            1259    16751    medicine_history_id_seq    SEQUENCE     }   CREATE SEQUENCE eps.medicine_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE eps.medicine_history_id_seq;
       eps       postgres    false    8         �            1259    16738    medicine_history    TABLE     d  CREATE TABLE eps.medicine_history (
    medicine_name character varying(50) NOT NULL,
    disease_code character varying(20),
    disease_name character varying(20),
    dosage character varying(80),
    prescription_id bigint NOT NULL,
    patient_id bigint NOT NULL,
    med_id bigint DEFAULT nextval('eps.medicine_history_id_seq'::regclass) NOT NULL
);
 !   DROP TABLE eps.medicine_history;
       eps         postgres    false    214    8         �            1259    16796    medicine_master_id_seq    SEQUENCE     |   CREATE SEQUENCE eps.medicine_master_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE eps.medicine_master_id_seq;
       eps       postgres    false    8         �            1259    16569    medicine_master    TABLE     �  CREATE TABLE eps.medicine_master (
    medicine_name character varying(50) NOT NULL,
    disease_code character varying(20) NOT NULL,
    disease_name character varying(20),
    clinical_availability numeric(3,0),
    age_group character varying(50) NOT NULL,
    treatment_id bigint NOT NULL,
    dosage character varying(100) NOT NULL,
    medicine_id bigint DEFAULT nextval('eps.medicine_master_id_seq'::regclass) NOT NULL
);
     DROP TABLE eps.medicine_master;
       eps         postgres    false    219    8         �            1259    16775    patient_case_history_id_seq    SEQUENCE     �   CREATE SEQUENCE eps.patient_case_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE eps.patient_case_history_id_seq;
       eps       postgres    false    8         �            1259    16777    patient_case_history_image    TABLE     d  CREATE TABLE eps.patient_case_history_image (
    case_history_id bigint DEFAULT nextval('eps.patient_case_history_id_seq'::regclass) NOT NULL,
    patient_id bigint NOT NULL,
    prescription_id bigint NOT NULL,
    ts_created timestamp without time zone,
    ts_diagnosed timestamp without time zone,
    case_history_image_uri character varying(200)
);
 +   DROP TABLE eps.patient_case_history_image;
       eps         postgres    false    217    8         �            1259    16403    patient_id_seq    SEQUENCE     t   CREATE SEQUENCE eps.patient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE eps.patient_id_seq;
       eps       postgres    false    8         �            1259    16654    patients    TABLE     �  CREATE TABLE eps.patients (
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
    DROP TABLE eps.patients;
       eps         postgres    false    199    8         �            1259    16405    prescription_id_seq    SEQUENCE     y   CREATE SEQUENCE eps.prescription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE eps.prescription_id_seq;
       eps       postgres    false    8         �            1259    16560    prescription_history    TABLE     u  CREATE TABLE eps.prescription_history (
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
 %   DROP TABLE eps.prescription_history;
       eps         postgres    false    200    8         �            1259    16401    rx_plan_seq    SEQUENCE     q   CREATE SEQUENCE eps.rx_plan_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE eps.rx_plan_seq;
       eps       postgres    false    8         �            1259    16509    tooth_quadrent    TABLE     �   CREATE TABLE eps.tooth_quadrent (
    tooth_index numeric(2,0) NOT NULL,
    tooth_qdr numeric(1,0) NOT NULL,
    tooth_number numeric(1,0) NOT NULL,
    tooth_group numeric(3,0)
);
    DROP TABLE eps.tooth_quadrent;
       eps         postgres    false    8         �            1259    16634    treatment_plan    TABLE     �   CREATE TABLE eps.treatment_plan (
    trt_id bigint DEFAULT nextval('eps.rx_plan_seq'::regclass) NOT NULL,
    trt_name character varying(50) NOT NULL,
    trt_desc character varying(100),
    clinical_finding bigint NOT NULL
);
    DROP TABLE eps.treatment_plan;
       eps         postgres    false    198    8         �            1259    24989    treatment_plan_history_seq    SEQUENCE     �   CREATE SEQUENCE eps.treatment_plan_history_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE eps.treatment_plan_history_seq;
       eps       postgres    false    8         �            1259    24991    treatment_plan_history    TABLE     �  CREATE TABLE eps.treatment_plan_history (
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
 '   DROP TABLE eps.treatment_plan_history;
       eps         postgres    false    220    8         q          0    16576 	   age_group 
   TABLE DATA                     eps       postgres    false    206       2929.dat r          0    16588    clinical_findings 
   TABLE DATA                     eps       postgres    false    207       2930.dat {          0    16762 
   fee_config 
   TABLE DATA                     eps       postgres    false    216       2939.dat n          0    16540    fees_breakup 
   TABLE DATA                     eps       postgres    false    203       2926.dat w          0    16676    medical_history 
   TABLE DATA                     eps       postgres    false    212       2935.dat u          0    16669    medical_history_master 
   TABLE DATA                     eps       postgres    false    210       2933.dat x          0    16738    medicine_history 
   TABLE DATA                     eps       postgres    false    213       2936.dat p          0    16569    medicine_master 
   TABLE DATA                     eps       postgres    false    205       2928.dat }          0    16777    patient_case_history_image 
   TABLE DATA                     eps       postgres    false    218       2941.dat t          0    16654    patients 
   TABLE DATA                     eps       postgres    false    209       2932.dat o          0    16560    prescription_history 
   TABLE DATA                     eps       postgres    false    204       2927.dat l          0    16509    tooth_quadrent 
   TABLE DATA                     eps       postgres    false    201       2924.dat s          0    16634    treatment_plan 
   TABLE DATA                     eps       postgres    false    208       2931.dat �          0    24991    treatment_plan_history 
   TABLE DATA                     eps       postgres    false    221       2944.dat �           0    0    fee_config_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('eps.fee_config_id_seq', 25, true);
            eps       postgres    false    215         �           0    0    fees_id_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('eps.fees_id_seq', 48, true);
            eps       postgres    false    202         �           0    0    findings_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('eps.findings_seq', 11, true);
            eps       postgres    false    197         �           0    0    medical_history_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('eps.medical_history_id_seq', 54, true);
            eps       postgres    false    211         �           0    0    medicine_history_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('eps.medicine_history_id_seq', 29, true);
            eps       postgres    false    214         �           0    0    medicine_master_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('eps.medicine_master_id_seq', 6, true);
            eps       postgres    false    219         �           0    0    patient_case_history_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('eps.patient_case_history_id_seq', 1, false);
            eps       postgres    false    217         �           0    0    patient_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('eps.patient_id_seq', 5, true);
            eps       postgres    false    199         �           0    0    prescription_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('eps.prescription_id_seq', 41, true);
            eps       postgres    false    200         �           0    0    rx_plan_seq    SEQUENCE SET     6   SELECT pg_catalog.setval('eps.rx_plan_seq', 1, true);
            eps       postgres    false    198         �           0    0    treatment_plan_history_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('eps.treatment_plan_history_seq', 18, true);
            eps       postgres    false    220         �
           2606    16580    age_group age_group_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY eps.age_group
    ADD CONSTRAINT age_group_pkey PRIMARY KEY (group_id);
 ?   ALTER TABLE ONLY eps.age_group DROP CONSTRAINT age_group_pkey;
       eps         postgres    false    206         �
           2606    16641 (   clinical_findings clinical_findings_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY eps.clinical_findings
    ADD CONSTRAINT clinical_findings_pkey PRIMARY KEY (f_id);
 O   ALTER TABLE ONLY eps.clinical_findings DROP CONSTRAINT clinical_findings_pkey;
       eps         postgres    false    207         �
           2606    16766    fee_config fee_config_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY eps.fee_config
    ADD CONSTRAINT fee_config_pkey PRIMARY KEY (fee_config_id);
 A   ALTER TABLE ONLY eps.fee_config DROP CONSTRAINT fee_config_pkey;
       eps         postgres    false    216         �
           2606    16545    fees_breakup fees_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT fees_pkey PRIMARY KEY (f_id);
 =   ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT fees_pkey;
       eps         postgres    false    203         �
           2606    16673 2   medical_history_master medical_history_master_pkey 
   CONSTRAINT        ALTER TABLE ONLY eps.medical_history_master
    ADD CONSTRAINT medical_history_master_pkey PRIMARY KEY (medical_history_name);
 Y   ALTER TABLE ONLY eps.medical_history_master DROP CONSTRAINT medical_history_master_pkey;
       eps         postgres    false    210         �
           2606    16684 %   medical_history medical_history_p_key 
   CONSTRAINT     p   ALTER TABLE ONLY eps.medical_history
    ADD CONSTRAINT medical_history_p_key PRIMARY KEY (medical_history_id);
 L   ALTER TABLE ONLY eps.medical_history DROP CONSTRAINT medical_history_p_key;
       eps         postgres    false    212         �
           2606    16759 &   medicine_history medicine_history_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_history_pkey PRIMARY KEY (med_id);
 M   ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicine_history_pkey;
       eps         postgres    false    213         �
           2606    16795 $   medicine_master medicine_master_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_master_pkey PRIMARY KEY (medicine_name, age_group, treatment_id, dosage);
 K   ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicine_master_pkey;
       eps         postgres    false    205    205    205    205         �
           2606    16782 4   patient_case_history_image patient_case_history_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY eps.patient_case_history_image
    ADD CONSTRAINT patient_case_history_pkey PRIMARY KEY (case_history_id);
 [   ALTER TABLE ONLY eps.patient_case_history_image DROP CONSTRAINT patient_case_history_pkey;
       eps         postgres    false    218         �
           2606    16568 )   prescription_history patient_history_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY eps.prescription_history
    ADD CONSTRAINT patient_history_pkey PRIMARY KEY (prescription_id);
 P   ALTER TABLE ONLY eps.prescription_history DROP CONSTRAINT patient_history_pkey;
       eps         postgres    false    204         �
           2606    16663    patients patients_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY eps.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (p_id);
 =   ALTER TABLE ONLY eps.patients DROP CONSTRAINT patients_pkey;
       eps         postgres    false    209         �
           2606    16513 "   tooth_quadrent tooth_quadrent_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY eps.tooth_quadrent
    ADD CONSTRAINT tooth_quadrent_pkey PRIMARY KEY (tooth_index);
 I   ALTER TABLE ONLY eps.tooth_quadrent DROP CONSTRAINT tooth_quadrent_pkey;
       eps         postgres    false    201         �
           2606    16648 "   treatment_plan treatment_plan_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT treatment_plan_pkey PRIMARY KEY (trt_id);
 I   ALTER TABLE ONLY eps.treatment_plan DROP CONSTRAINT treatment_plan_pkey;
       eps         postgres    false    208         �
           2606    24996 /   treatment_plan_history trtmnt_plan_history_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_history_pkey PRIMARY KEY (t_id);
 V   ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT trtmnt_plan_history_pkey;
       eps         postgres    false    221         �
           2606    16642    treatment_plan cf_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT cf_f_key FOREIGN KEY (clinical_finding) REFERENCES eps.clinical_findings(f_id);
 >   ALTER TABLE ONLY eps.treatment_plan DROP CONSTRAINT cf_f_key;
       eps       postgres    false    208    207    2772         �
           2606    16705 $   fees_breakup clinical_findings_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT clinical_findings_f_key FOREIGN KEY (trtmnt_plan_ref) REFERENCES eps.clinical_findings(f_id);
 K   ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT clinical_findings_f_key;
       eps       postgres    false    2772    207    203         �
           2606    16741 4   medicine_history medicine_hist_prescription_id_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);
 [   ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicine_hist_prescription_id_f_key;
       eps       postgres    false    204    213    2766         �
           2606    16649 *   medicine_master medicine_trtmnt_plan_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_trtmnt_plan_f_key FOREIGN KEY (treatment_id) REFERENCES eps.treatment_plan(trt_id);
 Q   ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicine_trtmnt_plan_f_key;
       eps       postgres    false    208    2774    205         �
           2606    16581 (   medicine_master medicines_age_group_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicines_age_group_fkey FOREIGN KEY (age_group) REFERENCES eps.age_group(group_id);
 O   ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicines_age_group_fkey;
       eps       postgres    false    205    2770    206         �
           2606    16746 -   medicine_history medicines_hist_patient_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);
 T   ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicines_hist_patient_f_key;
       eps       postgres    false    213    2776    209         �
           2606    25002 3   treatment_plan_history medicines_hist_patient_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);
 Z   ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT medicines_hist_patient_f_key;
       eps       postgres    false    221    209    2776         �
           2606    16700    fees_breakup patient_id_f_key    FK CONSTRAINT     ~   ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);
 D   ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT patient_id_f_key;
       eps       postgres    false    203    209    2776         �
           2606    16695 "   fees_breakup prescription_id_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);
 I   ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT prescription_id_f_key;
       eps       postgres    false    203    204    2766         �
           2606    24997 =   treatment_plan_history trtmnt_plan_hist_prescription_id_f_key    FK CONSTRAINT     �   ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);
 d   ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT trtmnt_plan_hist_prescription_id_f_key;
       eps       postgres    false    221    204    2766                                                                                                                                                                                                                    2929.dat                                                                                            0000600 0004000 0002000 00000000634 13421116654 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('3to10', 3, 10);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('10to30', 10, 30);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('30to60', 30, 60);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('60to90', 60, 90);
INSERT INTO eps.age_group (group_id, from_age, to_age) VALUES ('90to150', 90, 150);


                                                                                                    2930.dat                                                                                            0000600 0004000 0002000 00000002333 13421116654 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.clinical_findings (f_id, f_name, f_desc) VALUES (1, 'Caries', 'desc Caries');
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


                                                                                                                                                                                                                                                                                                     2939.dat                                                                                            0000600 0004000 0002000 00000004676 13421116654 0014300 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.fee_config (fee_config_id, treatment_plan_id, base_fee, tooth_group_id, tooth_group_percent, age_group_id, age_group_percent) VALUES (13, 1, 50.00, 1, 10.00, '3to10', 10.00);
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


                                                                  2926.dat                                                                                            0000600 0004000 0002000 00000001502 13421116654 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (45, 40, 1, NULL, 72, '2019-01-01 13:50:07.054', 1, NULL, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (46, 40, 1, 'test', 78, '2019-01-01 13:50:07.054', 2, 10, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (47, 41, 1, 'Test 2', 119, '2019-01-05 11:35:41.872', 2, 55, NULL);
INSERT INTO eps.fees_breakup (f_id, prescription_id, patient_id, notes, amount, ts_created, trtmnt_plan_ref, amount_paid, payment_ts) VALUES (48, 41, 1, 'Test 2.1', 119, '2019-01-05 11:35:41.872', 2, 55, NULL);


                                                                                                                                                                                              2935.dat                                                                                            0000600 0004000 0002000 00000002361 13421116654 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (49, 1, 'Asthma', '2019-01-01 13:50:07.069', NULL, NULL, 40);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (50, 1, 'Cardiac diseases', '2019-01-01 13:50:07.069', NULL, NULL, 40);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (51, 1, 'Hypertension', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (52, 1, 'Hypotension', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (53, 1, 'Hyperthyroidism', '2019-01-05 11:35:41.951', NULL, NULL, 41);
INSERT INTO eps.medical_history (medical_history_id, patient_id, medical_history_name, started_from, severity, note, prescription_id) VALUES (54, 1, 'Drug hypersensitivity', '2019-01-05 11:35:41.951', NULL, NULL, 41);


                                                                                                                                                                                                                                                                               2933.dat                                                                                            0000600 0004000 0002000 00000001453 13421116654 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hyperglycaemia');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypertension');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypotension');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Asthma');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Cerebro vascular accident');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Cardiac diseases');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hypothyroidism');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Hyperthyroidism');
INSERT INTO eps.medical_history_master (medical_history_name) VALUES ('Drug hypersensitivity');


                                                                                                                                                                                                                     2936.dat                                                                                            0000600 0004000 0002000 00000001051 13421116654 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med2', 'dCode2', NULL, 'dose', 40, 1, 27);
INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med1', 'dCode1', 'dName1', 'sokale bikale 1 ta khabar por', 41, 1, 28);
INSERT INTO eps.medicine_history (medicine_name, disease_code, disease_name, dosage, prescription_id, patient_id, med_id) VALUES ('med2', 'dCode2', NULL, 'dose', 41, 1, 29);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       2928.dat                                                                                            0000600 0004000 0002000 00000001214 13421116654 0014257 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med1', 'dCode1', 'dName1', 7, '10to30', 1, 'sokale bikale 1 ta khabar por', 1);
INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med2', 'dCode2', NULL, NULL, '10to30', 1, 'dose', 5);
INSERT INTO eps.medicine_master (medicine_name, disease_code, disease_name, clinical_availability, age_group, treatment_id, dosage, medicine_id) VALUES ('med3', 'dCode3', NULL, NULL, '10to30', 1, 'dose', 6);


                                                                                                                                                                                                                                                                                                                                                                                    2941.dat                                                                                            0000600 0004000 0002000 00000000002 13421116654 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              2932.dat                                                                                            0000600 0004000 0002000 00000002432 13421116654 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (-46, 'gourab', 'sadhu', 27, 3, 1992, 9831321400, 7980231838, 0, '2018-09-19 09:12:04.62', 'B+', 80, NULL, NULL, 'Habra Jaigachi Rathtala North 24 Parganas', 'Trying to write a pretty looooooooooooooooooooong text', NULL, NULL, NULL, NULL);
INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (-44, 'ruma', 'sadhu', 17, 8, 1990, 9647167828, NULL, 99, '2018-10-14 22:35:19.412', 'B+', 60, NULL, NULL, 'Habra
Jaigachi
Rathtala
West Bengal', 'North 24 Parganas', 160, 'female', NULL, 'percentage');
INSERT INTO eps.patients (p_id, first_name, last_name, dob_dd, dob_mm, dob_yy, contact_no1, contact_no2, discount, ts_created, blood_group, weight, image, email, address1, address2, height, sex, dob_timestamp, discount_type) VALUES (1, 'sourabh', 'sadhu', 27, 3, 1992, 9046787913, 7980231838, 20, '2018-08-19 21:41:38.485861', 'B+', 80, NULL, NULL, NULL, NULL, NULL, 'male', 701673000000, NULL);


                                                                                                                                                                                                                                      2927.dat                                                                                            0000600 0004000 0002000 00000001404 13421116654 0014257 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.prescription_history (prescription_id, chief_complaint, provisional_diagnosis, advice, note, investigation, patient_id, ts_created, ts_modified, next_appointment, visit_count, clinical_findings, printable_notes) VALUES (40, 'fatal', 'yo yo', 'vice advice', 'test Note', 'test', 1, '2019-01-01 13:50:06.991', NULL, '2019-01-03 00:00:00', 1, 'Nam na jana findings', NULL);
INSERT INTO eps.prescription_history (prescription_id, chief_complaint, provisional_diagnosis, advice, note, investigation, patient_id, ts_created, ts_modified, next_appointment, visit_count, clinical_findings, printable_notes) VALUES (41, 'Test 2', 'Test 2', 'Test 2', 'Test 2', 'Test 2', 1, '2019-01-05 11:35:41.669', NULL, '2019-01-09 00:00:00', 1, 'Nam na jana findings', NULL);


                                                                                                                                                                                                                                                            2924.dat                                                                                            0000600 0004000 0002000 00000006442 13421116654 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.tooth_quadrent (tooth_index, tooth_qdr, tooth_number, tooth_group) VALUES (41, 4, 1, 1);
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


                                                                                                                                                                                                                              2931.dat                                                                                            0000600 0004000 0002000 00000001647 13421116654 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (1, 'RCT', 'Root canal treatment', 1);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (2, 'Extraction', 'Extraction', 3);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (3, 'Oral prophylaxis', 'Oral prophylaxis', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (4, 'Restoration', 'Restoration statined teeth', 9);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (5, 'Prosthesis removable', 'Prosthesis removable', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (6, 'Prosthesis fixed', 'Prosthesis fixed', 10);
INSERT INTO eps.treatment_plan (trt_id, trt_name, trt_desc, clinical_finding) VALUES (7, 'Prosthesis removable', 'Prosthesis implant', 10);


                                                                                         2944.dat                                                                                            0000600 0004000 0002000 00000005665 13421116654 0014273 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO eps.treatment_plan_history (t_id, t_name, clinical_finding, tooth_index, prescription_id, patient_id, note, ts_created, ts_modified, status) VALUES (9, 'RCT', 'Periodontities', '34', 40, 1, NULL, '2019-01-01 13:50:36.694', NULL, 'Pending');
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


                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000053725 13421116654 0015403 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT trtmnt_plan_hist_prescription_id_f_key;
ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT prescription_id_f_key;
ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT patient_id_f_key;
ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT medicines_hist_patient_f_key;
ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicines_hist_patient_f_key;
ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicines_age_group_fkey;
ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicine_trtmnt_plan_f_key;
ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicine_hist_prescription_id_f_key;
ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT clinical_findings_f_key;
ALTER TABLE ONLY eps.treatment_plan DROP CONSTRAINT cf_f_key;
ALTER TABLE ONLY eps.treatment_plan_history DROP CONSTRAINT trtmnt_plan_history_pkey;
ALTER TABLE ONLY eps.treatment_plan DROP CONSTRAINT treatment_plan_pkey;
ALTER TABLE ONLY eps.tooth_quadrent DROP CONSTRAINT tooth_quadrent_pkey;
ALTER TABLE ONLY eps.patients DROP CONSTRAINT patients_pkey;
ALTER TABLE ONLY eps.prescription_history DROP CONSTRAINT patient_history_pkey;
ALTER TABLE ONLY eps.patient_case_history_image DROP CONSTRAINT patient_case_history_pkey;
ALTER TABLE ONLY eps.medicine_master DROP CONSTRAINT medicine_master_pkey;
ALTER TABLE ONLY eps.medicine_history DROP CONSTRAINT medicine_history_pkey;
ALTER TABLE ONLY eps.medical_history DROP CONSTRAINT medical_history_p_key;
ALTER TABLE ONLY eps.medical_history_master DROP CONSTRAINT medical_history_master_pkey;
ALTER TABLE ONLY eps.fees_breakup DROP CONSTRAINT fees_pkey;
ALTER TABLE ONLY eps.fee_config DROP CONSTRAINT fee_config_pkey;
ALTER TABLE ONLY eps.clinical_findings DROP CONSTRAINT clinical_findings_pkey;
ALTER TABLE ONLY eps.age_group DROP CONSTRAINT age_group_pkey;
DROP TABLE eps.treatment_plan_history;
DROP SEQUENCE eps.treatment_plan_history_seq;
DROP TABLE eps.treatment_plan;
DROP TABLE eps.tooth_quadrent;
DROP SEQUENCE eps.rx_plan_seq;
DROP TABLE eps.prescription_history;
DROP SEQUENCE eps.prescription_id_seq;
DROP TABLE eps.patients;
DROP SEQUENCE eps.patient_id_seq;
DROP TABLE eps.patient_case_history_image;
DROP SEQUENCE eps.patient_case_history_id_seq;
DROP TABLE eps.medicine_master;
DROP SEQUENCE eps.medicine_master_id_seq;
DROP TABLE eps.medicine_history;
DROP SEQUENCE eps.medicine_history_id_seq;
DROP TABLE eps.medical_history_master;
DROP TABLE eps.medical_history;
DROP SEQUENCE eps.medical_history_id_seq;
DROP TABLE eps.fees_breakup;
DROP SEQUENCE eps.fees_id_seq;
DROP TABLE eps.fee_config;
DROP SEQUENCE eps.fee_config_id_seq;
DROP TABLE eps.clinical_findings;
DROP SEQUENCE eps.findings_seq;
DROP TABLE eps.age_group;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
DROP SCHEMA eps;
--
-- Name: eps; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA eps;


ALTER SCHEMA eps OWNER TO postgres;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: age_group; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.age_group (
    group_id character varying(10) NOT NULL,
    from_age numeric(3,0) NOT NULL,
    to_age numeric(3,0) NOT NULL
);


ALTER TABLE eps.age_group OWNER TO postgres;

--
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
-- Name: clinical_findings; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.clinical_findings (
    f_id bigint DEFAULT nextval('eps.findings_seq'::regclass) NOT NULL,
    f_name character varying(50) NOT NULL,
    f_desc character varying(100)
);


ALTER TABLE eps.clinical_findings OWNER TO postgres;

--
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
-- Name: medical_history_master; Type: TABLE; Schema: eps; Owner: postgres
--

CREATE TABLE eps.medical_history_master (
    medical_history_name character varying(100) NOT NULL
);


ALTER TABLE eps.medical_history_master OWNER TO postgres;

--
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
-- Data for Name: age_group; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2929.dat

--
-- Data for Name: clinical_findings; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2930.dat

--
-- Data for Name: fee_config; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2939.dat

--
-- Data for Name: fees_breakup; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2926.dat

--
-- Data for Name: medical_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2935.dat

--
-- Data for Name: medical_history_master; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2933.dat

--
-- Data for Name: medicine_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2936.dat

--
-- Data for Name: medicine_master; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2928.dat

--
-- Data for Name: patient_case_history_image; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2941.dat

--
-- Data for Name: patients; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2932.dat

--
-- Data for Name: prescription_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2927.dat

--
-- Data for Name: tooth_quadrent; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2924.dat

--
-- Data for Name: treatment_plan; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2931.dat

--
-- Data for Name: treatment_plan_history; Type: TABLE DATA; Schema: eps; Owner: postgres
--

\i $$PATH$$/2944.dat

--
-- Name: fee_config_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.fee_config_id_seq', 25, true);


--
-- Name: fees_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.fees_id_seq', 48, true);


--
-- Name: findings_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.findings_seq', 11, true);


--
-- Name: medical_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medical_history_id_seq', 54, true);


--
-- Name: medicine_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medicine_history_id_seq', 29, true);


--
-- Name: medicine_master_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.medicine_master_id_seq', 6, true);


--
-- Name: patient_case_history_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.patient_case_history_id_seq', 1, false);


--
-- Name: patient_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.patient_id_seq', 5, true);


--
-- Name: prescription_id_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.prescription_id_seq', 41, true);


--
-- Name: rx_plan_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.rx_plan_seq', 1, true);


--
-- Name: treatment_plan_history_seq; Type: SEQUENCE SET; Schema: eps; Owner: postgres
--

SELECT pg_catalog.setval('eps.treatment_plan_history_seq', 18, true);


--
-- Name: age_group age_group_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.age_group
    ADD CONSTRAINT age_group_pkey PRIMARY KEY (group_id);


--
-- Name: clinical_findings clinical_findings_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.clinical_findings
    ADD CONSTRAINT clinical_findings_pkey PRIMARY KEY (f_id);


--
-- Name: fee_config fee_config_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fee_config
    ADD CONSTRAINT fee_config_pkey PRIMARY KEY (fee_config_id);


--
-- Name: fees_breakup fees_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT fees_pkey PRIMARY KEY (f_id);


--
-- Name: medical_history_master medical_history_master_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medical_history_master
    ADD CONSTRAINT medical_history_master_pkey PRIMARY KEY (medical_history_name);


--
-- Name: medical_history medical_history_p_key; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medical_history
    ADD CONSTRAINT medical_history_p_key PRIMARY KEY (medical_history_id);


--
-- Name: medicine_history medicine_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_history_pkey PRIMARY KEY (med_id);


--
-- Name: medicine_master medicine_master_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_master_pkey PRIMARY KEY (medicine_name, age_group, treatment_id, dosage);


--
-- Name: patient_case_history_image patient_case_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.patient_case_history_image
    ADD CONSTRAINT patient_case_history_pkey PRIMARY KEY (case_history_id);


--
-- Name: prescription_history patient_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.prescription_history
    ADD CONSTRAINT patient_history_pkey PRIMARY KEY (prescription_id);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (p_id);


--
-- Name: tooth_quadrent tooth_quadrent_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.tooth_quadrent
    ADD CONSTRAINT tooth_quadrent_pkey PRIMARY KEY (tooth_index);


--
-- Name: treatment_plan treatment_plan_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT treatment_plan_pkey PRIMARY KEY (trt_id);


--
-- Name: treatment_plan_history trtmnt_plan_history_pkey; Type: CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_history_pkey PRIMARY KEY (t_id);


--
-- Name: treatment_plan cf_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan
    ADD CONSTRAINT cf_f_key FOREIGN KEY (clinical_finding) REFERENCES eps.clinical_findings(f_id);


--
-- Name: fees_breakup clinical_findings_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT clinical_findings_f_key FOREIGN KEY (trtmnt_plan_ref) REFERENCES eps.clinical_findings(f_id);


--
-- Name: medicine_history medicine_hist_prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicine_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- Name: medicine_master medicine_trtmnt_plan_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicine_trtmnt_plan_f_key FOREIGN KEY (treatment_id) REFERENCES eps.treatment_plan(trt_id);


--
-- Name: medicine_master medicines_age_group_fkey; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_master
    ADD CONSTRAINT medicines_age_group_fkey FOREIGN KEY (age_group) REFERENCES eps.age_group(group_id);


--
-- Name: medicine_history medicines_hist_patient_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.medicine_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- Name: treatment_plan_history medicines_hist_patient_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- Name: fees_breakup patient_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id) REFERENCES eps.patients(p_id);


--
-- Name: fees_breakup prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.fees_breakup
    ADD CONSTRAINT prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- Name: treatment_plan_history trtmnt_plan_hist_prescription_id_f_key; Type: FK CONSTRAINT; Schema: eps; Owner: postgres
--

ALTER TABLE ONLY eps.treatment_plan_history
    ADD CONSTRAINT trtmnt_plan_hist_prescription_id_f_key FOREIGN KEY (prescription_id) REFERENCES eps.prescription_history(prescription_id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
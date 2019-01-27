--<ScriptOptions statementTerminator=";"/>

ALTER TABLE eps.medicine_history DROP CONSTRAINT medicines_hist_patient_f_key;

ALTER TABLE eps.fees_breakup DROP CONSTRAINT clinical_findings_f_key;

ALTER TABLE eps.fees_breakup DROP CONSTRAINT patient_id_f_key;

ALTER TABLE eps.medical_history DROP CONSTRAINT prescription_hist_f_key;

ALTER TABLE eps.fees_breakup DROP CONSTRAINT prescription_id_f_key;

ALTER TABLE eps.prescription_history DROP CONSTRAINT patient_id_fkey;

ALTER TABLE eps.medical_history DROP CONSTRAINT patient_id_f_key;

ALTER TABLE eps.medical_history DROP CONSTRAINT medical_history_name_f_key;

ALTER TABLE eps.medicine_master DROP CONSTRAINT medicines_age_group_fkey;

ALTER TABLE eps.medicine_master DROP CONSTRAINT medicine_trtmnt_plan_f_key;

ALTER TABLE eps.treatment_plan DROP CONSTRAINT cf_f_key;

ALTER TABLE eps.medicine_history DROP CONSTRAINT medicine_hist_prescription_id_f_key;

ALTER TABLE eps.treatment_plan DROP CONSTRAINT treatment_plan_pkey;

ALTER TABLE eps.medicine_master DROP CONSTRAINT medicine_master_pkey;

ALTER TABLE eps.patients DROP CONSTRAINT patients_pkey;

ALTER TABLE eps.clinical_findings DROP CONSTRAINT clinical_findings_pkey;

ALTER TABLE eps.patient_case_history_image DROP CONSTRAINT patient_case_history_pkey;

ALTER TABLE eps.medicine_history DROP CONSTRAINT medicine_history_pkey;

ALTER TABLE eps.age_group DROP CONSTRAINT age_group_pkey;

ALTER TABLE eps.medical_history DROP CONSTRAINT medical_history_p_key;

ALTER TABLE eps.prescription_history DROP CONSTRAINT patient_history_pkey;

ALTER TABLE eps.tooth_quadrent DROP CONSTRAINT tooth_quadrent_pkey;

ALTER TABLE eps.fee_config DROP CONSTRAINT fee_config_pkey;

ALTER TABLE eps.fees_breakup DROP CONSTRAINT fees_pkey;

ALTER TABLE eps.medical_history_master DROP CONSTRAINT medical_history_master_pkey;

DROP INDEX pg_catalog.pg_tablespace_spcname_index;

DROP INDEX eps.clinical_findings_pkey;

DROP INDEX pg_catalog.pg_inherits_parent_index;

DROP INDEX pg_catalog.pg_foreign_data_wrapper_name_index;

DROP INDEX eps.treatment_plan_pkey;

DROP INDEX pg_catalog.pg_language_oid_index;

DROP INDEX pg_catalog.pg_seclabel_object_index;

DROP INDEX pg_catalog.pg_type_oid_index;

DROP INDEX pg_catalog.pg_ts_dict_oid_index;

DROP INDEX pg_catalog.pg_trigger_tgrelid_tgname_index;

DROP INDEX pg_catalog.pg_constraint_conrelid_index;

DROP INDEX pg_catalog.pg_amop_oid_index;

DROP INDEX pg_catalog.pg_amop_opr_fam_index;

DROP INDEX pg_catalog.pg_ts_template_tmplname_index;

DROP INDEX eps.patient_history_pkey;

DROP INDEX pg_catalog.pg_inherits_relid_seqno_index;

DROP INDEX eps.tooth_quadrent_pkey;

DROP INDEX eps.medicine_master_pkey;

DROP INDEX pg_catalog.pg_opclass_am_name_nsp_index;

DROP INDEX pg_catalog.pg_statistic_relid_att_inh_index;

DROP INDEX pg_catalog.pg_pltemplate_name_index;

DROP INDEX pg_catalog.pg_foreign_data_wrapper_oid_index;

DROP INDEX pg_catalog.pg_db_role_setting_databaseid_rol_index;

DROP INDEX pg_catalog.pg_conversion_name_nsp_index;

DROP INDEX pg_catalog.pg_conversion_default_index;

DROP INDEX pg_catalog.pg_user_mapping_oid_index;

DROP INDEX pg_catalog.pg_am_oid_index;

DROP INDEX pg_catalog.pg_attrdef_adrelid_adnum_index;

DROP INDEX pg_catalog.pg_ts_parser_prsname_index;

DROP INDEX pg_catalog.pg_index_indexrelid_index;

DROP INDEX pg_catalog.pg_foreign_table_relid_index;

DROP INDEX pg_catalog.pg_collation_name_enc_nsp_index;

DROP INDEX pg_catalog.pg_statistic_ext_oid_index;

DROP INDEX pg_catalog.pg_ts_dict_dictname_index;

DROP INDEX pg_catalog.pg_aggregate_fnoid_index;

DROP INDEX pg_catalog.pg_depend_depender_index;

DROP INDEX pg_catalog.pg_ts_config_oid_index;

DROP INDEX pg_catalog.pg_database_oid_index;

DROP INDEX pg_catalog.pg_attribute_relid_attnam_index;

DROP INDEX pg_catalog.pg_opfamily_oid_index;

DROP INDEX pg_catalog.pg_rewrite_rel_rulename_index;

DROP INDEX pg_catalog.pg_policy_oid_index;

DROP INDEX pg_catalog.pg_attrdef_oid_index;

DROP INDEX pg_catalog.pg_collation_oid_index;

DROP INDEX pg_catalog.pg_replication_origin_roiident_index;

DROP INDEX pg_catalog.pg_extension_name_index;

DROP INDEX pg_catalog.pg_cast_source_target_index;

DROP INDEX pg_catalog.pg_largeobject_metadata_oid_index;

DROP INDEX pg_catalog.pg_language_name_index;

DROP INDEX pg_catalog.pg_sequence_seqrelid_index;

DROP INDEX pg_catalog.pg_largeobject_loid_pn_index;

DROP INDEX pg_catalog.pg_constraint_oid_index;

DROP INDEX pg_catalog.pg_description_o_c_o_index;

DROP INDEX pg_catalog.pg_extension_oid_index;

DROP INDEX pg_catalog.pg_publication_oid_index;

DROP INDEX pg_catalog.pg_publication_pubname_index;

DROP INDEX pg_catalog.pg_rewrite_oid_index;

DROP INDEX pg_catalog.pg_publication_rel_prrelid_prpubid_index;

DROP INDEX pg_catalog.pg_subscription_subname_index;

DROP INDEX pg_catalog.pg_type_typname_nsp_index;

DROP INDEX pg_catalog.pg_cast_oid_index;

DROP INDEX pg_catalog.pg_replication_origin_roname_index;

DROP INDEX pg_catalog.pg_shdepend_reference_index;

DROP INDEX pg_catalog.pg_trigger_tgconstraint_index;

DROP INDEX pg_catalog.pg_index_indrelid_index;

DROP INDEX pg_catalog.pg_authid_oid_index;

DROP INDEX pg_catalog.pg_range_rngtypid_index;

DROP INDEX pg_catalog.pg_enum_typid_label_index;

DROP INDEX pg_catalog.pg_opclass_oid_index;

DROP INDEX pg_catalog.pg_ts_template_oid_index;

DROP INDEX pg_catalog.pg_namespace_oid_index;

DROP INDEX pg_catalog.pg_opfamily_am_name_nsp_index;

DROP INDEX pg_catalog.pg_amproc_fam_proc_index;

DROP INDEX pg_catalog.pg_subscription_oid_index;

DROP INDEX pg_catalog.pg_namespace_nspname_index;

DROP INDEX pg_catalog.pg_class_tblspc_relfilenode_index;

DROP INDEX pg_catalog.pg_transform_oid_index;

DROP INDEX pg_catalog.pg_event_trigger_oid_index;

DROP INDEX pg_catalog.pg_foreign_server_name_index;

DROP INDEX pg_catalog.pg_enum_typid_sortorder_index;

DROP INDEX pg_catalog.pg_amop_fam_strat_index;

DROP INDEX pg_catalog.pg_operator_oprname_l_r_n_index;

DROP INDEX pg_catalog.pg_proc_proname_args_nsp_index;

DROP INDEX pg_catalog.pg_class_relname_nsp_index;

DROP INDEX eps.medical_history_master_pkey;

DROP INDEX pg_catalog.pg_attribute_relid_attnum_index;

DROP INDEX pg_catalog.pg_user_mapping_user_server_index;

DROP INDEX pg_catalog.pg_transform_type_lang_index;

DROP INDEX pg_catalog.pg_subscription_rel_srrelid_srsubid_index;

DROP INDEX pg_catalog.pg_default_acl_role_nsp_obj_index;

DROP INDEX pg_catalog.pg_ts_config_map_index;

DROP INDEX pg_catalog.pg_tablespace_oid_index;

DROP INDEX pg_catalog.pg_default_acl_oid_index;

DROP INDEX eps.medicine_history_pkey;

DROP INDEX pg_catalog.pg_authid_rolname_index;

DROP INDEX pg_catalog.pg_enum_oid_index;

DROP INDEX pg_catalog.pg_operator_oid_index;

DROP INDEX pg_catalog.pg_auth_members_role_member_index;

DROP INDEX pg_catalog.pg_statistic_ext_name_index;

DROP INDEX pg_catalog.pg_database_datname_index;

DROP INDEX pg_catalog.pg_shdepend_depender_index;

DROP INDEX pg_catalog.pg_am_name_index;

DROP INDEX pg_catalog.pg_publication_rel_oid_index;

DROP INDEX pg_catalog.pg_partitioned_table_partrelid_index;

DROP INDEX eps.fees_pkey;

DROP INDEX pg_catalog.pg_statistic_ext_relid_index;

DROP INDEX pg_catalog.pg_trigger_oid_index;

DROP INDEX pg_catalog.pg_ts_config_cfgname_index;

DROP INDEX pg_catalog.pg_policy_polrelid_polname_index;

DROP INDEX eps.patient_case_history_pkey;

DROP INDEX pg_catalog.pg_shdescription_o_c_index;

DROP INDEX eps.patients_pkey;

DROP INDEX pg_catalog.pg_depend_reference_index;

DROP INDEX pg_catalog.pg_ts_parser_oid_index;

DROP INDEX eps.fee_config_pkey;

DROP INDEX pg_catalog.pg_foreign_server_oid_index;

DROP INDEX pg_catalog.pg_constraint_contypid_index;

DROP INDEX pg_catalog.pg_class_oid_index;

DROP INDEX pg_catalog.pg_shseclabel_object_index;

DROP INDEX pg_catalog.pg_amproc_oid_index;

DROP INDEX pg_catalog.pg_init_privs_o_c_o_index;

DROP INDEX pg_catalog.pg_event_trigger_evtname_index;

DROP INDEX pg_catalog.pg_auth_members_member_role_index;

DROP INDEX pg_catalog.pg_conversion_oid_index;

DROP INDEX eps.medical_history_p_key;

DROP INDEX pg_catalog.pg_constraint_conname_nsp_index;

DROP INDEX pg_catalog.pg_proc_oid_index;

DROP INDEX eps.age_group_pkey;

DROP TABLE pg_catalog.pg_subscription_rel;

DROP TABLE eps.fees_breakup;

DROP TABLE pg_catalog.pg_replication_origin;

DROP TABLE pg_catalog.pg_amproc;

DROP TABLE pg_catalog.pg_statistic_ext;

DROP TABLE eps.prescription_history;

DROP TABLE eps.medicine_master;

DROP TABLE pg_catalog.pg_subscription;

DROP TABLE pg_catalog.pg_description;

DROP TABLE pg_catalog.pg_foreign_table;

DROP TABLE pg_catalog.pg_tablespace;

DROP TABLE pg_catalog.pg_language;

DROP TABLE pg_catalog.pg_proc;

DROP TABLE pg_catalog.pg_collation;

DROP TABLE pg_catalog.pg_ts_parser;

DROP TABLE pg_catalog.pg_foreign_server;

DROP TABLE pg_catalog.pg_opfamily;

DROP TABLE pg_catalog.pg_partitioned_table;

DROP TABLE pg_catalog.pg_publication_rel;

DROP TABLE pg_catalog.pg_transform;

DROP TABLE pg_catalog.pg_am;

DROP TABLE pg_catalog.pg_ts_dict;

DROP TABLE pg_catalog.pg_authid;

DROP TABLE pg_catalog.pg_policy;

DROP TABLE pg_catalog.pg_init_privs;

DROP TABLE pg_catalog.pg_publication;

DROP TABLE pg_catalog.pg_class;

DROP TABLE eps.patient_case_history_image;

DROP TABLE pg_catalog.pg_event_trigger;

DROP TABLE pg_catalog.pg_enum;

DROP TABLE pg_catalog.pg_trigger;

DROP TABLE pg_catalog.pg_rewrite;

DROP TABLE pg_catalog.pg_statistic;

DROP TABLE pg_catalog.pg_sequence;

DROP TABLE pg_catalog.pg_largeobject;

DROP TABLE pg_catalog.pg_opclass;

DROP TABLE pg_catalog.pg_amop;

DROP TABLE pg_catalog.pg_database;

DROP TABLE pg_catalog.pg_constraint;

DROP TABLE pg_catalog.pg_attrdef;

DROP TABLE pg_catalog.pg_db_role_setting;

DROP TABLE pg_catalog.pg_extension;

DROP TABLE pg_catalog.pg_shdescription;

DROP TABLE pg_catalog.pg_largeobject_metadata;

DROP TABLE pg_catalog.pg_type;

DROP TABLE pg_catalog.pg_ts_template;

DROP TABLE information_schema.sql_sizing;

DROP TABLE pg_catalog.pg_auth_members;

DROP TABLE eps.medical_history;

DROP TABLE information_schema.sql_languages;

DROP TABLE pg_catalog.pg_cast;

DROP TABLE information_schema.sql_sizing_profiles;

DROP TABLE eps.medicine_history;

DROP TABLE information_schema.sql_packages;

DROP TABLE pg_catalog.pg_operator;

DROP TABLE pg_catalog.pg_pltemplate;

DROP TABLE information_schema.sql_implementation_info;

DROP TABLE pg_catalog.pg_aggregate;

DROP TABLE eps.fee_config;

DROP TABLE eps.medical_history_master;

DROP TABLE eps.tooth_quadrent;

DROP TABLE pg_catalog.pg_seclabel;

DROP TABLE pg_catalog.pg_user_mapping;

DROP TABLE pg_catalog.pg_shseclabel;

DROP TABLE pg_catalog.pg_namespace;

DROP TABLE eps.clinical_findings;

DROP TABLE eps.patients;

DROP TABLE pg_catalog.pg_ts_config;

DROP TABLE pg_catalog.pg_attribute;

DROP TABLE pg_catalog.pg_default_acl;

DROP TABLE information_schema.sql_features;

DROP TABLE pg_catalog.pg_ts_config_map;

DROP TABLE eps.treatment_plan;

DROP TABLE pg_catalog.pg_depend;

DROP TABLE pg_catalog.pg_range;

DROP TABLE pg_catalog.pg_foreign_data_wrapper;

DROP TABLE information_schema.sql_parts;

DROP TABLE pg_catalog.pg_shdepend;

DROP TABLE eps.age_group;

DROP TABLE pg_catalog.pg_conversion;

DROP TABLE pg_catalog.pg_inherits;

DROP TABLE pg_catalog.pg_index;

CREATE TABLE pg_catalog.pg_subscription_rel (
		srsubid OID NOT NULL,
		srrelid OID NOT NULL,
		srsubstate BPCHAR(1) NOT NULL,
		srsublsn null NOT NULL
	);

CREATE TABLE eps.fees_breakup (
		f_id BIGSERIAL DEFAULT nextval('eps.fees_id_seq'::regclass) NOT NULL,
		prescription_id INT8 NOT NULL,
		patient_id INT8 NOT NULL,
		notes VARCHAR(50),
		amount NUMERIC(8 , 0) NOT NULL,
		ts_created TIMESTAMP NOT NULL,
		clinical_findings_ref INT8
	);

CREATE TABLE pg_catalog.pg_replication_origin (
		roident OID NOT NULL,
		roname TEXT(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_amproc (
		amprocfamily OID NOT NULL,
		amproclefttype OID NOT NULL,
		amprocrighttype OID NOT NULL,
		amprocnum INT2 NOT NULL,
		amproc REGPROC NOT NULL
	);

CREATE TABLE pg_catalog.pg_statistic_ext (
		stxrelid OID NOT NULL,
		stxname CIDR(2147483647) NOT NULL,
		stxnamespace OID NOT NULL,
		stxowner OID NOT NULL,
		stxkeys null NOT NULL,
		stxkind ABSTIME[ ] NOT NULL,
		stxndistinct null,
		stxdependencies null
	);

CREATE TABLE eps.prescription_history (
		prescription_id BIGSERIAL DEFAULT nextval('eps.prescription_id_seq'::regclass) NOT NULL,
		chief_complaint VARCHAR(500),
		clinical_findings VARCHAR(500),
		personal_diagnosis VARCHAR(1000),
		treatment_plan VARCHAR(500),
		treatment_done VARCHAR(500),
		advice VARCHAR(100),
		note VARCHAR(200),
		investigation VARCHAR(200),
		medicines VARCHAR(200),
		patient_id INT8 NOT NULL,
		ts_created TIMESTAMP,
		ts_modified TIMESTAMP,
		next_appointment TIMESTAMP
	);

CREATE TABLE eps.medicine_master (
		medicine_name VARCHAR(50) NOT NULL,
		disease_code VARCHAR(20) NOT NULL,
		disease_name VARCHAR(20),
		clinical_availability NUMERIC(3 , 0),
		age_group VARCHAR(50) NOT NULL,
		treatment_id INT8 NOT NULL,
		dosage VARCHAR(100) NOT NULL
	);

CREATE TABLE pg_catalog.pg_subscription (
		subdbid OID NOT NULL,
		subname CIDR(2147483647) NOT NULL,
		subowner OID NOT NULL,
		subenabled BOOL NOT NULL,
		subconninfo TEXT(2147483647) NOT NULL,
		subslotname CIDR(2147483647) NOT NULL,
		subsynccommit TEXT(2147483647) NOT NULL,
		subpublications TEXT[ ](2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_description (
		objoid OID NOT NULL,
		classoid OID NOT NULL,
		objsubid INT4 NOT NULL,
		description TEXT(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_foreign_table (
		ftrelid OID NOT NULL,
		ftserver OID NOT NULL,
		ftoptions TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_tablespace (
		spcname CIDR(2147483647) NOT NULL,
		spcowner OID NOT NULL,
		spcacl ACLITEM[ ],
		spcoptions TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_language (
		lanname CIDR(2147483647) NOT NULL,
		lanowner OID NOT NULL,
		lanispl BOOL NOT NULL,
		lanpltrusted BOOL NOT NULL,
		lanplcallfoid OID NOT NULL,
		laninline OID NOT NULL,
		lanvalidator OID NOT NULL,
		lanacl ACLITEM[ ]
	);

CREATE TABLE pg_catalog.pg_proc (
		proname CIDR(2147483647) NOT NULL,
		pronamespace OID NOT NULL,
		proowner OID NOT NULL,
		prolang OID NOT NULL,
		procost FLOAT4 NOT NULL,
		prorows FLOAT4 NOT NULL,
		provariadic OID NOT NULL,
		protransform REGPROC NOT NULL,
		proisagg BOOL NOT NULL,
		proiswindow BOOL NOT NULL,
		prosecdef BOOL NOT NULL,
		proleakproof BOOL NOT NULL,
		proisstrict BOOL NOT NULL,
		proretset BOOL NOT NULL,
		provolatile BPCHAR(1) NOT NULL,
		proparallel BPCHAR(1) NOT NULL,
		pronargs INT2 NOT NULL,
		pronargdefaults INT2 NOT NULL,
		prorettype OID NOT NULL,
		proargtypes null NOT NULL,
		proallargtypes OID[ ],
		proargmodes ABSTIME[ ],
		proargnames TEXT[ ](2147483647),
		proargdefaults null,
		protrftypes OID[ ],
		prosrc TEXT(2147483647) NOT NULL,
		probin TEXT(2147483647),
		proconfig TEXT[ ](2147483647),
		proacl ACLITEM[ ]
	);

CREATE TABLE pg_catalog.pg_collation (
		collname CIDR(2147483647) NOT NULL,
		collnamespace OID NOT NULL,
		collowner OID NOT NULL,
		collprovider BPCHAR(1) NOT NULL,
		collencoding INT4 NOT NULL,
		collcollate CIDR(2147483647) NOT NULL,
		collctype CIDR(2147483647) NOT NULL,
		collversion TEXT(2147483647)
	);

CREATE TABLE pg_catalog.pg_ts_parser (
		prsname CIDR(2147483647) NOT NULL,
		prsnamespace OID NOT NULL,
		prsstart REGPROC NOT NULL,
		prstoken REGPROC NOT NULL,
		prsend REGPROC NOT NULL,
		prsheadline REGPROC NOT NULL,
		prslextype REGPROC NOT NULL
	);

CREATE TABLE pg_catalog.pg_foreign_server (
		srvname CIDR(2147483647) NOT NULL,
		srvowner OID NOT NULL,
		srvfdw OID NOT NULL,
		srvtype TEXT(2147483647),
		srvversion TEXT(2147483647),
		srvacl ACLITEM[ ],
		srvoptions TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_opfamily (
		opfmethod OID NOT NULL,
		opfname CIDR(2147483647) NOT NULL,
		opfnamespace OID NOT NULL,
		opfowner OID NOT NULL
	);

CREATE TABLE pg_catalog.pg_partitioned_table (
		partrelid OID NOT NULL,
		partstrat BPCHAR(1) NOT NULL,
		partnatts INT2 NOT NULL,
		partattrs null NOT NULL,
		partclass null NOT NULL,
		partcollation null NOT NULL,
		partexprs null
	);

CREATE TABLE pg_catalog.pg_publication_rel (
		prpubid OID NOT NULL,
		prrelid OID NOT NULL
	);

CREATE TABLE pg_catalog.pg_transform (
		trftype OID NOT NULL,
		trflang OID NOT NULL,
		trffromsql REGPROC NOT NULL,
		trftosql REGPROC NOT NULL
	);

CREATE TABLE pg_catalog.pg_am (
		amname CIDR(2147483647) NOT NULL,
		amhandler REGPROC NOT NULL,
		amtype BPCHAR(1) NOT NULL
	);

CREATE TABLE pg_catalog.pg_ts_dict (
		dictname CIDR(2147483647) NOT NULL,
		dictnamespace OID NOT NULL,
		dictowner OID NOT NULL,
		dicttemplate OID NOT NULL,
		dictinitoption TEXT(2147483647)
	);

CREATE TABLE pg_catalog.pg_authid (
		rolname CIDR(2147483647) NOT NULL,
		rolsuper BOOL NOT NULL,
		rolinherit BOOL NOT NULL,
		rolcreaterole BOOL NOT NULL,
		rolcreatedb BOOL NOT NULL,
		rolcanlogin BOOL NOT NULL,
		rolreplication BOOL NOT NULL,
		rolbypassrls BOOL NOT NULL,
		rolconnlimit INT4 NOT NULL,
		rolpassword TEXT(2147483647),
		rolvaliduntil TIMESTAMPTZ
	);

CREATE TABLE pg_catalog.pg_policy (
		polname CIDR(2147483647) NOT NULL,
		polrelid OID NOT NULL,
		polcmd BPCHAR(1) NOT NULL,
		polpermissive BOOL NOT NULL,
		polroles OID[ ],
		polqual null,
		polwithcheck null
	);

CREATE TABLE pg_catalog.pg_init_privs (
		objoid OID NOT NULL,
		classoid OID NOT NULL,
		objsubid INT4 NOT NULL,
		privtype BPCHAR(1) NOT NULL,
		initprivs ACLITEM[ ] NOT NULL
	);

CREATE TABLE pg_catalog.pg_publication (
		pubname CIDR(2147483647) NOT NULL,
		pubowner OID NOT NULL,
		puballtables BOOL NOT NULL,
		pubinsert BOOL NOT NULL,
		pubupdate BOOL NOT NULL,
		pubdelete BOOL NOT NULL
	);

CREATE TABLE pg_catalog.pg_class (
		relname CIDR(2147483647) NOT NULL,
		relnamespace OID NOT NULL,
		reltype OID NOT NULL,
		reloftype OID NOT NULL,
		relowner OID NOT NULL,
		relam OID NOT NULL,
		relfilenode OID NOT NULL,
		reltablespace OID NOT NULL,
		relpages INT4 NOT NULL,
		reltuples FLOAT4 NOT NULL,
		relallvisible INT4 NOT NULL,
		reltoastrelid OID NOT NULL,
		relhasindex BOOL NOT NULL,
		relisshared BOOL NOT NULL,
		relpersistence BPCHAR(1) NOT NULL,
		relkind BPCHAR(1) NOT NULL,
		relnatts INT2 NOT NULL,
		relchecks INT2 NOT NULL,
		relhasoids BOOL NOT NULL,
		relhaspkey BOOL NOT NULL,
		relhasrules BOOL NOT NULL,
		relhastriggers BOOL NOT NULL,
		relhassubclass BOOL NOT NULL,
		relrowsecurity BOOL NOT NULL,
		relforcerowsecurity BOOL NOT NULL,
		relispopulated BOOL NOT NULL,
		relreplident BPCHAR(1) NOT NULL,
		relispartition BOOL NOT NULL,
		relfrozenxid XID NOT NULL,
		relminmxid XID NOT NULL,
		relacl ACLITEM[ ],
		reloptions TEXT[ ](2147483647),
		relpartbound null
	);

CREATE TABLE eps.patient_case_history_image (
		case_history_id BIGSERIAL DEFAULT nextval('eps.patient_case_history_id_seq'::regclass) NOT NULL,
		patient_id INT8 NOT NULL,
		prescription_id INT8 NOT NULL,
		ts_created TIMESTAMP,
		ts_diagnosed TIMESTAMP,
		case_history_image_uri VARCHAR(200)
	);

CREATE TABLE pg_catalog.pg_event_trigger (
		evtname CIDR(2147483647) NOT NULL,
		evtevent CIDR(2147483647) NOT NULL,
		evtowner OID NOT NULL,
		evtfoid OID NOT NULL,
		evtenabled BPCHAR(1) NOT NULL,
		evttags TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_enum (
		enumtypid OID NOT NULL,
		enumsortorder FLOAT4 NOT NULL,
		enumlabel CIDR(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_trigger (
		tgrelid OID NOT NULL,
		tgname CIDR(2147483647) NOT NULL,
		tgfoid OID NOT NULL,
		tgtype INT2 NOT NULL,
		tgenabled BPCHAR(1) NOT NULL,
		tgisinternal BOOL NOT NULL,
		tgconstrrelid OID NOT NULL,
		tgconstrindid OID NOT NULL,
		tgconstraint OID NOT NULL,
		tgdeferrable BOOL NOT NULL,
		tginitdeferred BOOL NOT NULL,
		tgnargs INT2 NOT NULL,
		tgattr null NOT NULL,
		tgargs BYTEA(2147483647) NOT NULL,
		tgqual null,
		tgoldtable CIDR(2147483647),
		tgnewtable CIDR(2147483647)
	);

CREATE TABLE pg_catalog.pg_rewrite (
		rulename CIDR(2147483647) NOT NULL,
		ev_class OID NOT NULL,
		ev_type BPCHAR(1) NOT NULL,
		ev_enabled BPCHAR(1) NOT NULL,
		is_instead BOOL NOT NULL,
		ev_qual null,
		ev_action null
	);

CREATE TABLE pg_catalog.pg_statistic (
		starelid OID NOT NULL,
		staattnum INT2 NOT NULL,
		stainherit BOOL NOT NULL,
		stanullfrac FLOAT4 NOT NULL,
		stawidth INT4 NOT NULL,
		stadistinct FLOAT4 NOT NULL,
		stakind1 INT2 NOT NULL,
		stakind2 INT2 NOT NULL,
		stakind3 INT2 NOT NULL,
		stakind4 INT2 NOT NULL,
		stakind5 INT2 NOT NULL,
		staop1 OID NOT NULL,
		staop2 OID NOT NULL,
		staop3 OID NOT NULL,
		staop4 OID NOT NULL,
		staop5 OID NOT NULL,
		stanumbers1 FLOAT4[ ],
		stanumbers2 FLOAT4[ ],
		stanumbers3 FLOAT4[ ],
		stanumbers4 FLOAT4[ ],
		stanumbers5 FLOAT4[ ],
		stavalues1 null,
		stavalues2 null,
		stavalues3 null,
		stavalues4 null,
		stavalues5 null
	);

CREATE TABLE pg_catalog.pg_sequence (
		seqrelid OID NOT NULL,
		seqtypid OID NOT NULL,
		seqstart INT8 NOT NULL,
		seqincrement INT8 NOT NULL,
		seqmax INT8 NOT NULL,
		seqmin INT8 NOT NULL,
		seqcache INT8 NOT NULL,
		seqcycle BOOL NOT NULL
	);

CREATE TABLE pg_catalog.pg_largeobject (
		loid OID NOT NULL,
		pageno INT4 NOT NULL,
		data BYTEA(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_opclass (
		opcmethod OID NOT NULL,
		opcname CIDR(2147483647) NOT NULL,
		opcnamespace OID NOT NULL,
		opcowner OID NOT NULL,
		opcfamily OID NOT NULL,
		opcintype OID NOT NULL,
		opcdefault BOOL NOT NULL,
		opckeytype OID NOT NULL
	);

CREATE TABLE pg_catalog.pg_amop (
		amopfamily OID NOT NULL,
		amoplefttype OID NOT NULL,
		amoprighttype OID NOT NULL,
		amopstrategy INT2 NOT NULL,
		amoppurpose BPCHAR(1) NOT NULL,
		amopopr OID NOT NULL,
		amopmethod OID NOT NULL,
		amopsortfamily OID NOT NULL
	);

CREATE TABLE pg_catalog.pg_database (
		datname CIDR(2147483647) NOT NULL,
		datdba OID NOT NULL,
		encoding INT4 NOT NULL,
		datcollate CIDR(2147483647) NOT NULL,
		datctype CIDR(2147483647) NOT NULL,
		datistemplate BOOL NOT NULL,
		datallowconn BOOL NOT NULL,
		datconnlimit INT4 NOT NULL,
		datlastsysoid OID NOT NULL,
		datfrozenxid XID NOT NULL,
		datminmxid XID NOT NULL,
		dattablespace OID NOT NULL,
		datacl ACLITEM[ ]
	);

CREATE TABLE pg_catalog.pg_constraint (
		conname CIDR(2147483647) NOT NULL,
		connamespace OID NOT NULL,
		contype BPCHAR(1) NOT NULL,
		condeferrable BOOL NOT NULL,
		condeferred BOOL NOT NULL,
		convalidated BOOL NOT NULL,
		conrelid OID NOT NULL,
		contypid OID NOT NULL,
		conindid OID NOT NULL,
		confrelid OID NOT NULL,
		confupdtype BPCHAR(1) NOT NULL,
		confdeltype BPCHAR(1) NOT NULL,
		confmatchtype BPCHAR(1) NOT NULL,
		conislocal BOOL NOT NULL,
		coninhcount INT4 NOT NULL,
		connoinherit BOOL NOT NULL,
		conkey INT2[ ],
		confkey INT2[ ],
		conpfeqop OID[ ],
		conppeqop OID[ ],
		conffeqop OID[ ],
		conexclop OID[ ],
		conbin null,
		consrc TEXT(2147483647)
	);

CREATE TABLE pg_catalog.pg_attrdef (
		adrelid OID NOT NULL,
		adnum INT2 NOT NULL,
		adbin null,
		adsrc TEXT(2147483647)
	);

CREATE TABLE pg_catalog.pg_db_role_setting (
		setdatabase OID NOT NULL,
		setrole OID NOT NULL,
		setconfig TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_extension (
		extname CIDR(2147483647) NOT NULL,
		extowner OID NOT NULL,
		extnamespace OID NOT NULL,
		extrelocatable BOOL NOT NULL,
		extversion TEXT(2147483647) NOT NULL,
		extconfig OID[ ],
		extcondition TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_shdescription (
		objoid OID NOT NULL,
		classoid OID NOT NULL,
		description TEXT(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_largeobject_metadata (
		lomowner OID NOT NULL,
		lomacl ACLITEM[ ]
	);

CREATE TABLE pg_catalog.pg_type (
		typname CIDR(2147483647) NOT NULL,
		typnamespace OID NOT NULL,
		typowner OID NOT NULL,
		typlen INT2 NOT NULL,
		typbyval BOOL NOT NULL,
		typtype BPCHAR(1) NOT NULL,
		typcategory BPCHAR(1) NOT NULL,
		typispreferred BOOL NOT NULL,
		typisdefined BOOL NOT NULL,
		typdelim BPCHAR(1) NOT NULL,
		typrelid OID NOT NULL,
		typelem OID NOT NULL,
		typarray OID NOT NULL,
		typinput REGPROC NOT NULL,
		typoutput REGPROC NOT NULL,
		typreceive REGPROC NOT NULL,
		typsend REGPROC NOT NULL,
		typmodin REGPROC NOT NULL,
		typmodout REGPROC NOT NULL,
		typanalyze REGPROC NOT NULL,
		typalign BPCHAR(1) NOT NULL,
		typstorage BPCHAR(1) NOT NULL,
		typnotnull BOOL NOT NULL,
		typbasetype OID NOT NULL,
		typtypmod INT4 NOT NULL,
		typndims INT4 NOT NULL,
		typcollation OID NOT NULL,
		typdefaultbin null,
		typdefault TEXT(2147483647),
		typacl ACLITEM[ ]
	);

CREATE TABLE pg_catalog.pg_ts_template (
		tmplname CIDR(2147483647) NOT NULL,
		tmplnamespace OID NOT NULL,
		tmplinit REGPROC NOT NULL,
		tmpllexize REGPROC NOT NULL
	);

CREATE TABLE information_schema.sql_sizing (
		sizing_id null,
		sizing_name null,
		supported_value null,
		comments null
	);

CREATE TABLE pg_catalog.pg_auth_members (
		roleid OID NOT NULL,
		member OID NOT NULL,
		grantor OID NOT NULL,
		admin_option BOOL NOT NULL
	);

CREATE TABLE eps.medical_history (
		medical_history_id BIGSERIAL DEFAULT nextval('eps.medical_history_id_seq'::regclass) NOT NULL,
		patient_id INT8 NOT NULL,
		medical_history_name VARCHAR(2147483647),
		started_from TIMESTAMP,
		severity VARCHAR(50),
		note VARCHAR(200),
		prescription_id INT8
	);

CREATE TABLE information_schema.sql_languages (
		sql_language_source null,
		sql_language_year null,
		sql_language_conformance null,
		sql_language_integrity null,
		sql_language_implementation null,
		sql_language_binding_style null,
		sql_language_programming_language null
	);

CREATE TABLE pg_catalog.pg_cast (
		castsource OID NOT NULL,
		casttarget OID NOT NULL,
		castfunc OID NOT NULL,
		castcontext BPCHAR(1) NOT NULL,
		castmethod BPCHAR(1) NOT NULL
	);

CREATE TABLE information_schema.sql_sizing_profiles (
		sizing_id null,
		sizing_name null,
		profile_id null,
		required_value null,
		comments null
	);

CREATE TABLE eps.medicine_history (
		medicine_name VARCHAR(50) NOT NULL,
		disease_code VARCHAR(20),
		disease_name VARCHAR(20),
		dosage VARCHAR(80),
		prescription_id INT8 NOT NULL,
		patient_id INT8 NOT NULL,
		med_id BIGSERIAL DEFAULT nextval('eps.medicine_history_id_seq'::regclass) NOT NULL
	);

CREATE TABLE information_schema.sql_packages (
		feature_id null,
		feature_name null,
		is_supported null,
		is_verified_by null,
		comments null
	);

CREATE TABLE pg_catalog.pg_operator (
		oprname CIDR(2147483647) NOT NULL,
		oprnamespace OID NOT NULL,
		oprowner OID NOT NULL,
		oprkind BPCHAR(1) NOT NULL,
		oprcanmerge BOOL NOT NULL,
		oprcanhash BOOL NOT NULL,
		oprleft OID NOT NULL,
		oprright OID NOT NULL,
		oprresult OID NOT NULL,
		oprcom OID NOT NULL,
		oprnegate OID NOT NULL,
		oprcode REGPROC NOT NULL,
		oprrest REGPROC NOT NULL,
		oprjoin REGPROC NOT NULL
	);

CREATE TABLE pg_catalog.pg_pltemplate (
		tmplname CIDR(2147483647) NOT NULL,
		tmpltrusted BOOL NOT NULL,
		tmpldbacreate BOOL NOT NULL,
		tmplhandler TEXT(2147483647) NOT NULL,
		tmplinline TEXT(2147483647),
		tmplvalidator TEXT(2147483647),
		tmpllibrary TEXT(2147483647) NOT NULL,
		tmplacl ACLITEM[ ]
	);

CREATE TABLE information_schema.sql_implementation_info (
		implementation_info_id null,
		implementation_info_name null,
		integer_value null,
		character_value null,
		comments null
	);

CREATE TABLE pg_catalog.pg_aggregate (
		aggfnoid REGPROC NOT NULL,
		aggkind BPCHAR(1) NOT NULL,
		aggnumdirectargs INT2 NOT NULL,
		aggtransfn REGPROC NOT NULL,
		aggfinalfn REGPROC NOT NULL,
		aggcombinefn REGPROC NOT NULL,
		aggserialfn REGPROC NOT NULL,
		aggdeserialfn REGPROC NOT NULL,
		aggmtransfn REGPROC NOT NULL,
		aggminvtransfn REGPROC NOT NULL,
		aggmfinalfn REGPROC NOT NULL,
		aggfinalextra BOOL NOT NULL,
		aggmfinalextra BOOL NOT NULL,
		aggsortop OID NOT NULL,
		aggtranstype OID NOT NULL,
		aggtransspace INT4 NOT NULL,
		aggmtranstype OID NOT NULL,
		aggmtransspace INT4 NOT NULL,
		agginitval TEXT(2147483647),
		aggminitval TEXT(2147483647)
	);

CREATE TABLE eps.fee_config (
		fee_config_id BIGSERIAL DEFAULT nextval('eps.fee_config_id_seq'::regclass) NOT NULL,
		treatment_plan_id NUMERIC(131089 , 0),
		base_fee NUMERIC(6 , 2),
		tooth_group_id NUMERIC(3 , 0),
		tooth_group_percent NUMERIC(5 , 2),
		age_group_id VARCHAR(10),
		age_group_percent NUMERIC(5 , 2)
	);

CREATE TABLE eps.medical_history_master (
		medical_history_name VARCHAR(100) NOT NULL
	);

CREATE TABLE eps.tooth_quadrent (
		tooth_index NUMERIC(2 , 0) NOT NULL,
		tooth_qdr NUMERIC(1 , 0) NOT NULL,
		tooth_number NUMERIC(1 , 0) NOT NULL,
		tooth_group NUMERIC(3 , 0)
	);

CREATE TABLE pg_catalog.pg_seclabel (
		objoid OID NOT NULL,
		classoid OID NOT NULL,
		objsubid INT4 NOT NULL,
		provider TEXT(2147483647) NOT NULL,
		label TEXT(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_user_mapping (
		umuser OID NOT NULL,
		umserver OID NOT NULL,
		umoptions TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_shseclabel (
		objoid OID NOT NULL,
		classoid OID NOT NULL,
		provider TEXT(2147483647) NOT NULL,
		label TEXT(2147483647) NOT NULL
	);

CREATE TABLE pg_catalog.pg_namespace (
		nspname CIDR(2147483647) NOT NULL,
		nspowner OID NOT NULL,
		nspacl ACLITEM[ ]
	);

CREATE TABLE eps.clinical_findings (
		f_id BIGSERIAL DEFAULT nextval('eps.findings_seq'::regclass) NOT NULL,
		f_name VARCHAR(50) NOT NULL,
		f_desc VARCHAR(100)
	);

CREATE TABLE eps.patients (
		p_id BIGSERIAL DEFAULT nextval('eps.patient_id_seq'::regclass) NOT NULL,
		first_name VARCHAR(30) NOT NULL,
		last_name VARCHAR(30) NOT NULL,
		dob_dd NUMERIC(2 , 0) NOT NULL,
		dob_mm NUMERIC(2 , 0) NOT NULL,
		dob_yy NUMERIC(4 , 0) DEFAULT 1947 NOT NULL,
		contact_no1 NUMERIC(15 , 0) NOT NULL,
		contact_no2 NUMERIC(15 , 0),
		discount NUMERIC(2 , 0) DEFAULT 0 NOT NULL,
		ts_created TIMESTAMP,
		blood_group VARCHAR(3),
		weight INT4,
		image BYTEA(2147483647)
	);

CREATE TABLE pg_catalog.pg_ts_config (
		cfgname CIDR(2147483647) NOT NULL,
		cfgnamespace OID NOT NULL,
		cfgowner OID NOT NULL,
		cfgparser OID NOT NULL
	);

CREATE TABLE pg_catalog.pg_attribute (
		attrelid OID NOT NULL,
		attname CIDR(2147483647) NOT NULL,
		atttypid OID NOT NULL,
		attstattarget INT4 NOT NULL,
		attlen INT2 NOT NULL,
		attnum INT2 NOT NULL,
		attndims INT4 NOT NULL,
		attcacheoff INT4 NOT NULL,
		atttypmod INT4 NOT NULL,
		attbyval BOOL NOT NULL,
		attstorage BPCHAR(1) NOT NULL,
		attalign BPCHAR(1) NOT NULL,
		attnotnull BOOL NOT NULL,
		atthasdef BOOL NOT NULL,
		attidentity BPCHAR(1) NOT NULL,
		attisdropped BOOL NOT NULL,
		attislocal BOOL NOT NULL,
		attinhcount INT4 NOT NULL,
		attcollation OID NOT NULL,
		attacl ACLITEM[ ],
		attoptions TEXT[ ](2147483647),
		attfdwoptions TEXT[ ](2147483647)
	);

CREATE TABLE pg_catalog.pg_default_acl (
		defaclrole OID NOT NULL,
		defaclnamespace OID NOT NULL,
		defaclobjtype BPCHAR(1) NOT NULL,
		defaclacl ACLITEM[ ]
	);

CREATE TABLE information_schema.sql_features (
		feature_id null,
		feature_name null,
		sub_feature_id null,
		sub_feature_name null,
		is_supported null,
		is_verified_by null,
		comments null
	);

CREATE TABLE pg_catalog.pg_ts_config_map (
		mapcfg OID NOT NULL,
		maptokentype INT4 NOT NULL,
		mapseqno INT4 NOT NULL,
		mapdict OID NOT NULL
	);

CREATE TABLE eps.treatment_plan (
		trt_id BIGSERIAL DEFAULT nextval('eps.rx_plan_seq'::regclass) NOT NULL,
		trt_name VARCHAR(50) NOT NULL,
		trt_desc VARCHAR(100),
		clinical_finding INT8 NOT NULL
	);

CREATE TABLE pg_catalog.pg_depend (
		classid OID NOT NULL,
		objid OID NOT NULL,
		objsubid INT4 NOT NULL,
		refclassid OID NOT NULL,
		refobjid OID NOT NULL,
		refobjsubid INT4 NOT NULL,
		deptype BPCHAR(1) NOT NULL
	);

CREATE TABLE pg_catalog.pg_range (
		rngtypid OID NOT NULL,
		rngsubtype OID NOT NULL,
		rngcollation OID NOT NULL,
		rngsubopc OID NOT NULL,
		rngcanonical REGPROC NOT NULL,
		rngsubdiff REGPROC NOT NULL
	);

CREATE TABLE pg_catalog.pg_foreign_data_wrapper (
		fdwname CIDR(2147483647) NOT NULL,
		fdwowner OID NOT NULL,
		fdwhandler OID NOT NULL,
		fdwvalidator OID NOT NULL,
		fdwacl ACLITEM[ ],
		fdwoptions TEXT[ ](2147483647)
	);

CREATE TABLE information_schema.sql_parts (
		feature_id null,
		feature_name null,
		is_supported null,
		is_verified_by null,
		comments null
	);

CREATE TABLE pg_catalog.pg_shdepend (
		dbid OID NOT NULL,
		classid OID NOT NULL,
		objid OID NOT NULL,
		objsubid INT4 NOT NULL,
		refclassid OID NOT NULL,
		refobjid OID NOT NULL,
		deptype BPCHAR(1) NOT NULL
	);

CREATE TABLE eps.age_group (
		group_id VARCHAR(10) NOT NULL,
		from_age NUMERIC(3 , 0) NOT NULL,
		to_age NUMERIC(3 , 0) NOT NULL
	);

CREATE TABLE pg_catalog.pg_conversion (
		conname CIDR(2147483647) NOT NULL,
		connamespace OID NOT NULL,
		conowner OID NOT NULL,
		conforencoding INT4 NOT NULL,
		contoencoding INT4 NOT NULL,
		conproc REGPROC NOT NULL,
		condefault BOOL NOT NULL
	);

CREATE TABLE pg_catalog.pg_inherits (
		inhrelid OID NOT NULL,
		inhparent OID NOT NULL,
		inhseqno INT4 NOT NULL
	);

CREATE TABLE pg_catalog.pg_index (
		indexrelid OID NOT NULL,
		indrelid OID NOT NULL,
		indnatts INT2 NOT NULL,
		indisunique BOOL NOT NULL,
		indisprimary BOOL NOT NULL,
		indisexclusion BOOL NOT NULL,
		indimmediate BOOL NOT NULL,
		indisclustered BOOL NOT NULL,
		indisvalid BOOL NOT NULL,
		indcheckxmin BOOL NOT NULL,
		indisready BOOL NOT NULL,
		indislive BOOL NOT NULL,
		indisreplident BOOL NOT NULL,
		indkey null NOT NULL,
		indcollation null NOT NULL,
		indclass null NOT NULL,
		indoption null NOT NULL,
		indexprs null,
		indpred null
	);

CREATE UNIQUE INDEX pg_catalog.pg_tablespace_spcname_index ON pg_catalog.pg_tablespace (spcname ASC);

CREATE UNIQUE INDEX eps.clinical_findings_pkey ON eps.clinical_findings (f_id ASC);

CREATE INDEX pg_catalog.pg_inherits_parent_index ON pg_catalog.pg_inherits (inhparent ASC);

CREATE UNIQUE INDEX pg_catalog.pg_foreign_data_wrapper_name_index ON pg_catalog.pg_foreign_data_wrapper (fdwname ASC);

CREATE UNIQUE INDEX eps.treatment_plan_pkey ON eps.treatment_plan (trt_id ASC);

CREATE UNIQUE INDEX pg_catalog.pg_language_oid_index ON pg_catalog.pg_language (null);

CREATE UNIQUE INDEX pg_catalog.pg_seclabel_object_index ON pg_catalog.pg_seclabel (objoid ASC, classoid ASC, objsubid ASC, provider ASC);

CREATE UNIQUE INDEX pg_catalog.pg_type_oid_index ON pg_catalog.pg_type (null);

CREATE UNIQUE INDEX pg_catalog.pg_ts_dict_oid_index ON pg_catalog.pg_ts_dict (null);

CREATE UNIQUE INDEX pg_catalog.pg_trigger_tgrelid_tgname_index ON pg_catalog.pg_trigger (tgrelid ASC, tgname ASC);

CREATE INDEX pg_catalog.pg_constraint_conrelid_index ON pg_catalog.pg_constraint (conrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_amop_oid_index ON pg_catalog.pg_amop (null);

CREATE UNIQUE INDEX pg_catalog.pg_amop_opr_fam_index ON pg_catalog.pg_amop (amopopr ASC, amoppurpose ASC, amopfamily ASC);

CREATE UNIQUE INDEX pg_catalog.pg_ts_template_tmplname_index ON pg_catalog.pg_ts_template (tmplname ASC, tmplnamespace ASC);

CREATE UNIQUE INDEX eps.patient_history_pkey ON eps.prescription_history (prescription_id ASC);

CREATE UNIQUE INDEX pg_catalog.pg_inherits_relid_seqno_index ON pg_catalog.pg_inherits (inhrelid ASC, inhseqno ASC);

CREATE UNIQUE INDEX eps.tooth_quadrent_pkey ON eps.tooth_quadrent (tooth_index ASC);

CREATE UNIQUE INDEX eps.medicine_master_pkey ON eps.medicine_master (medicine_name ASC, age_group ASC, treatment_id ASC, dosage ASC);

CREATE UNIQUE INDEX pg_catalog.pg_opclass_am_name_nsp_index ON pg_catalog.pg_opclass (opcmethod ASC, opcname ASC, opcnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_statistic_relid_att_inh_index ON pg_catalog.pg_statistic (starelid ASC, staattnum ASC, stainherit ASC);

CREATE UNIQUE INDEX pg_catalog.pg_pltemplate_name_index ON pg_catalog.pg_pltemplate (tmplname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_foreign_data_wrapper_oid_index ON pg_catalog.pg_foreign_data_wrapper (null);

CREATE UNIQUE INDEX pg_catalog.pg_db_role_setting_databaseid_rol_index ON pg_catalog.pg_db_role_setting (setdatabase ASC, setrole ASC);

CREATE UNIQUE INDEX pg_catalog.pg_conversion_name_nsp_index ON pg_catalog.pg_conversion (conname ASC, connamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_conversion_default_index ON pg_catalog.pg_conversion (connamespace ASC, conforencoding ASC, contoencoding ASC);

CREATE UNIQUE INDEX pg_catalog.pg_user_mapping_oid_index ON pg_catalog.pg_user_mapping (null);

CREATE UNIQUE INDEX pg_catalog.pg_am_oid_index ON pg_catalog.pg_am (null);

CREATE UNIQUE INDEX pg_catalog.pg_attrdef_adrelid_adnum_index ON pg_catalog.pg_attrdef (adrelid ASC, adnum ASC);

CREATE UNIQUE INDEX pg_catalog.pg_ts_parser_prsname_index ON pg_catalog.pg_ts_parser (prsname ASC, prsnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_index_indexrelid_index ON pg_catalog.pg_index (indexrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_foreign_table_relid_index ON pg_catalog.pg_foreign_table (ftrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_collation_name_enc_nsp_index ON pg_catalog.pg_collation (collname ASC, collencoding ASC, collnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_statistic_ext_oid_index ON pg_catalog.pg_statistic_ext (null);

CREATE UNIQUE INDEX pg_catalog.pg_ts_dict_dictname_index ON pg_catalog.pg_ts_dict (dictname ASC, dictnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_aggregate_fnoid_index ON pg_catalog.pg_aggregate (aggfnoid ASC);

CREATE INDEX pg_catalog.pg_depend_depender_index ON pg_catalog.pg_depend (classid ASC, objid ASC, objsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_ts_config_oid_index ON pg_catalog.pg_ts_config (null);

CREATE UNIQUE INDEX pg_catalog.pg_database_oid_index ON pg_catalog.pg_database (null);

CREATE UNIQUE INDEX pg_catalog.pg_attribute_relid_attnam_index ON pg_catalog.pg_attribute (attrelid ASC, attname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_opfamily_oid_index ON pg_catalog.pg_opfamily (null);

CREATE UNIQUE INDEX pg_catalog.pg_rewrite_rel_rulename_index ON pg_catalog.pg_rewrite (ev_class ASC, rulename ASC);

CREATE UNIQUE INDEX pg_catalog.pg_policy_oid_index ON pg_catalog.pg_policy (null);

CREATE UNIQUE INDEX pg_catalog.pg_attrdef_oid_index ON pg_catalog.pg_attrdef (null);

CREATE UNIQUE INDEX pg_catalog.pg_collation_oid_index ON pg_catalog.pg_collation (null);

CREATE UNIQUE INDEX pg_catalog.pg_replication_origin_roiident_index ON pg_catalog.pg_replication_origin (roident ASC);

CREATE UNIQUE INDEX pg_catalog.pg_extension_name_index ON pg_catalog.pg_extension (extname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_cast_source_target_index ON pg_catalog.pg_cast (castsource ASC, casttarget ASC);

CREATE UNIQUE INDEX pg_catalog.pg_largeobject_metadata_oid_index ON pg_catalog.pg_largeobject_metadata (null);

CREATE UNIQUE INDEX pg_catalog.pg_language_name_index ON pg_catalog.pg_language (lanname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_sequence_seqrelid_index ON pg_catalog.pg_sequence (seqrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_largeobject_loid_pn_index ON pg_catalog.pg_largeobject (loid ASC, pageno ASC);

CREATE UNIQUE INDEX pg_catalog.pg_constraint_oid_index ON pg_catalog.pg_constraint (null);

CREATE UNIQUE INDEX pg_catalog.pg_description_o_c_o_index ON pg_catalog.pg_description (objoid ASC, classoid ASC, objsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_extension_oid_index ON pg_catalog.pg_extension (null);

CREATE UNIQUE INDEX pg_catalog.pg_publication_oid_index ON pg_catalog.pg_publication (null);

CREATE UNIQUE INDEX pg_catalog.pg_publication_pubname_index ON pg_catalog.pg_publication (pubname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_rewrite_oid_index ON pg_catalog.pg_rewrite (null);

CREATE UNIQUE INDEX pg_catalog.pg_publication_rel_prrelid_prpubid_index ON pg_catalog.pg_publication_rel (prrelid ASC, prpubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_subscription_subname_index ON pg_catalog.pg_subscription (subdbid ASC, subname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_type_typname_nsp_index ON pg_catalog.pg_type (typname ASC, typnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_cast_oid_index ON pg_catalog.pg_cast (null);

CREATE UNIQUE INDEX pg_catalog.pg_replication_origin_roname_index ON pg_catalog.pg_replication_origin (roname ASC);

CREATE INDEX pg_catalog.pg_shdepend_reference_index ON pg_catalog.pg_shdepend (refclassid ASC, refobjid ASC);

CREATE INDEX pg_catalog.pg_trigger_tgconstraint_index ON pg_catalog.pg_trigger (tgconstraint ASC);

CREATE INDEX pg_catalog.pg_index_indrelid_index ON pg_catalog.pg_index (indrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_authid_oid_index ON pg_catalog.pg_authid (null);

CREATE UNIQUE INDEX pg_catalog.pg_range_rngtypid_index ON pg_catalog.pg_range (rngtypid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_enum_typid_label_index ON pg_catalog.pg_enum (enumtypid ASC, enumlabel ASC);

CREATE UNIQUE INDEX pg_catalog.pg_opclass_oid_index ON pg_catalog.pg_opclass (null);

CREATE UNIQUE INDEX pg_catalog.pg_ts_template_oid_index ON pg_catalog.pg_ts_template (null);

CREATE UNIQUE INDEX pg_catalog.pg_namespace_oid_index ON pg_catalog.pg_namespace (null);

CREATE UNIQUE INDEX pg_catalog.pg_opfamily_am_name_nsp_index ON pg_catalog.pg_opfamily (opfmethod ASC, opfname ASC, opfnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_amproc_fam_proc_index ON pg_catalog.pg_amproc (amprocfamily ASC, amproclefttype ASC, amprocrighttype ASC, amprocnum ASC);

CREATE UNIQUE INDEX pg_catalog.pg_subscription_oid_index ON pg_catalog.pg_subscription (null);

CREATE UNIQUE INDEX pg_catalog.pg_namespace_nspname_index ON pg_catalog.pg_namespace (nspname ASC);

CREATE INDEX pg_catalog.pg_class_tblspc_relfilenode_index ON pg_catalog.pg_class (reltablespace ASC, relfilenode ASC);

CREATE UNIQUE INDEX pg_catalog.pg_transform_oid_index ON pg_catalog.pg_transform (null);

CREATE UNIQUE INDEX pg_catalog.pg_event_trigger_oid_index ON pg_catalog.pg_event_trigger (null);

CREATE UNIQUE INDEX pg_catalog.pg_foreign_server_name_index ON pg_catalog.pg_foreign_server (srvname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_enum_typid_sortorder_index ON pg_catalog.pg_enum (enumtypid ASC, enumsortorder ASC);

CREATE UNIQUE INDEX pg_catalog.pg_amop_fam_strat_index ON pg_catalog.pg_amop (amopfamily ASC, amoplefttype ASC, amoprighttype ASC, amopstrategy ASC);

CREATE UNIQUE INDEX pg_catalog.pg_operator_oprname_l_r_n_index ON pg_catalog.pg_operator (oprname ASC, oprleft ASC, oprright ASC, oprnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_proc_proname_args_nsp_index ON pg_catalog.pg_proc (proname ASC, proargtypes ASC, pronamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_class_relname_nsp_index ON pg_catalog.pg_class (relname ASC, relnamespace ASC);

CREATE UNIQUE INDEX eps.medical_history_master_pkey ON eps.medical_history_master (medical_history_name ASC);

CREATE UNIQUE INDEX pg_catalog.pg_attribute_relid_attnum_index ON pg_catalog.pg_attribute (attrelid ASC, attnum ASC);

CREATE UNIQUE INDEX pg_catalog.pg_user_mapping_user_server_index ON pg_catalog.pg_user_mapping (umuser ASC, umserver ASC);

CREATE UNIQUE INDEX pg_catalog.pg_transform_type_lang_index ON pg_catalog.pg_transform (trftype ASC, trflang ASC);

CREATE UNIQUE INDEX pg_catalog.pg_subscription_rel_srrelid_srsubid_index ON pg_catalog.pg_subscription_rel (srrelid ASC, srsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_default_acl_role_nsp_obj_index ON pg_catalog.pg_default_acl (defaclrole ASC, defaclnamespace ASC, defaclobjtype ASC);

CREATE UNIQUE INDEX pg_catalog.pg_ts_config_map_index ON pg_catalog.pg_ts_config_map (mapcfg ASC, maptokentype ASC, mapseqno ASC);

CREATE UNIQUE INDEX pg_catalog.pg_tablespace_oid_index ON pg_catalog.pg_tablespace (null);

CREATE UNIQUE INDEX pg_catalog.pg_default_acl_oid_index ON pg_catalog.pg_default_acl (null);

CREATE UNIQUE INDEX eps.medicine_history_pkey ON eps.medicine_history (med_id ASC);

CREATE UNIQUE INDEX pg_catalog.pg_authid_rolname_index ON pg_catalog.pg_authid (rolname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_enum_oid_index ON pg_catalog.pg_enum (null);

CREATE UNIQUE INDEX pg_catalog.pg_operator_oid_index ON pg_catalog.pg_operator (null);

CREATE UNIQUE INDEX pg_catalog.pg_auth_members_role_member_index ON pg_catalog.pg_auth_members (roleid ASC, member ASC);

CREATE UNIQUE INDEX pg_catalog.pg_statistic_ext_name_index ON pg_catalog.pg_statistic_ext (stxname ASC, stxnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_database_datname_index ON pg_catalog.pg_database (datname ASC);

CREATE INDEX pg_catalog.pg_shdepend_depender_index ON pg_catalog.pg_shdepend (dbid ASC, classid ASC, objid ASC, objsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_am_name_index ON pg_catalog.pg_am (amname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_publication_rel_oid_index ON pg_catalog.pg_publication_rel (null);

CREATE UNIQUE INDEX pg_catalog.pg_partitioned_table_partrelid_index ON pg_catalog.pg_partitioned_table (partrelid ASC);

CREATE UNIQUE INDEX eps.fees_pkey ON eps.fees_breakup (f_id ASC);

CREATE INDEX pg_catalog.pg_statistic_ext_relid_index ON pg_catalog.pg_statistic_ext (stxrelid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_trigger_oid_index ON pg_catalog.pg_trigger (null);

CREATE UNIQUE INDEX pg_catalog.pg_ts_config_cfgname_index ON pg_catalog.pg_ts_config (cfgname ASC, cfgnamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_policy_polrelid_polname_index ON pg_catalog.pg_policy (polrelid ASC, polname ASC);

CREATE UNIQUE INDEX eps.patient_case_history_pkey ON eps.patient_case_history_image (case_history_id ASC);

CREATE UNIQUE INDEX pg_catalog.pg_shdescription_o_c_index ON pg_catalog.pg_shdescription (objoid ASC, classoid ASC);

CREATE UNIQUE INDEX eps.patients_pkey ON eps.patients (p_id ASC);

CREATE INDEX pg_catalog.pg_depend_reference_index ON pg_catalog.pg_depend (refclassid ASC, refobjid ASC, refobjsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_ts_parser_oid_index ON pg_catalog.pg_ts_parser (null);

CREATE UNIQUE INDEX eps.fee_config_pkey ON eps.fee_config (fee_config_id ASC);

CREATE UNIQUE INDEX pg_catalog.pg_foreign_server_oid_index ON pg_catalog.pg_foreign_server (null);

CREATE INDEX pg_catalog.pg_constraint_contypid_index ON pg_catalog.pg_constraint (contypid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_class_oid_index ON pg_catalog.pg_class (null);

CREATE UNIQUE INDEX pg_catalog.pg_shseclabel_object_index ON pg_catalog.pg_shseclabel (objoid ASC, classoid ASC, provider ASC);

CREATE UNIQUE INDEX pg_catalog.pg_amproc_oid_index ON pg_catalog.pg_amproc (null);

CREATE UNIQUE INDEX pg_catalog.pg_init_privs_o_c_o_index ON pg_catalog.pg_init_privs (objoid ASC, classoid ASC, objsubid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_event_trigger_evtname_index ON pg_catalog.pg_event_trigger (evtname ASC);

CREATE UNIQUE INDEX pg_catalog.pg_auth_members_member_role_index ON pg_catalog.pg_auth_members (member ASC, roleid ASC);

CREATE UNIQUE INDEX pg_catalog.pg_conversion_oid_index ON pg_catalog.pg_conversion (null);

CREATE UNIQUE INDEX eps.medical_history_p_key ON eps.medical_history (medical_history_id ASC);

CREATE INDEX pg_catalog.pg_constraint_conname_nsp_index ON pg_catalog.pg_constraint (conname ASC, connamespace ASC);

CREATE UNIQUE INDEX pg_catalog.pg_proc_oid_index ON pg_catalog.pg_proc (null);

CREATE UNIQUE INDEX eps.age_group_pkey ON eps.age_group (group_id ASC);

ALTER TABLE eps.treatment_plan ADD CONSTRAINT treatment_plan_pkey PRIMARY KEY (trt_id);

ALTER TABLE eps.medicine_master ADD CONSTRAINT medicine_master_pkey PRIMARY KEY (medicine_name, age_group, treatment_id, dosage);

ALTER TABLE eps.patients ADD CONSTRAINT patients_pkey PRIMARY KEY (p_id);

ALTER TABLE eps.clinical_findings ADD CONSTRAINT clinical_findings_pkey PRIMARY KEY (f_id);

ALTER TABLE eps.patient_case_history_image ADD CONSTRAINT patient_case_history_pkey PRIMARY KEY (case_history_id);

ALTER TABLE eps.medicine_history ADD CONSTRAINT medicine_history_pkey PRIMARY KEY (med_id);

ALTER TABLE eps.age_group ADD CONSTRAINT age_group_pkey PRIMARY KEY (group_id);

ALTER TABLE eps.medical_history ADD CONSTRAINT medical_history_p_key PRIMARY KEY (medical_history_id);

ALTER TABLE eps.prescription_history ADD CONSTRAINT patient_history_pkey PRIMARY KEY (prescription_id);

ALTER TABLE eps.tooth_quadrent ADD CONSTRAINT tooth_quadrent_pkey PRIMARY KEY (tooth_index);

ALTER TABLE eps.fee_config ADD CONSTRAINT fee_config_pkey PRIMARY KEY (fee_config_id);

ALTER TABLE eps.fees_breakup ADD CONSTRAINT fees_pkey PRIMARY KEY (f_id);

ALTER TABLE eps.medical_history_master ADD CONSTRAINT medical_history_master_pkey PRIMARY KEY (medical_history_name);

ALTER TABLE eps.medicine_history ADD CONSTRAINT medicines_hist_patient_f_key FOREIGN KEY (patient_id)
	REFERENCES eps.patients (p_id);

ALTER TABLE eps.fees_breakup ADD CONSTRAINT clinical_findings_f_key FOREIGN KEY (clinical_findings_ref)
	REFERENCES eps.clinical_findings (f_id);

ALTER TABLE eps.fees_breakup ADD CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id)
	REFERENCES eps.patients (p_id);

ALTER TABLE eps.medical_history ADD CONSTRAINT prescription_hist_f_key FOREIGN KEY (prescription_id)
	REFERENCES eps.prescription_history (prescription_id);

ALTER TABLE eps.fees_breakup ADD CONSTRAINT prescription_id_f_key FOREIGN KEY (prescription_id)
	REFERENCES eps.prescription_history (prescription_id);

ALTER TABLE eps.prescription_history ADD CONSTRAINT patient_id_fkey FOREIGN KEY (patient_id)
	REFERENCES eps.patients (p_id);

ALTER TABLE eps.medical_history ADD CONSTRAINT patient_id_f_key FOREIGN KEY (patient_id)
	REFERENCES eps.patients (p_id);

ALTER TABLE eps.medical_history ADD CONSTRAINT medical_history_name_f_key FOREIGN KEY (medical_history_name)
	REFERENCES eps.medical_history_master (medical_history_name);

ALTER TABLE eps.medicine_master ADD CONSTRAINT medicines_age_group_fkey FOREIGN KEY (age_group)
	REFERENCES eps.age_group (group_id);

ALTER TABLE eps.medicine_master ADD CONSTRAINT medicine_trtmnt_plan_f_key FOREIGN KEY (treatment_id)
	REFERENCES eps.treatment_plan (trt_id);

ALTER TABLE eps.treatment_plan ADD CONSTRAINT cf_f_key FOREIGN KEY (clinical_finding)
	REFERENCES eps.clinical_findings (f_id);

ALTER TABLE eps.medicine_history ADD CONSTRAINT medicine_hist_prescription_id_f_key FOREIGN KEY (prescription_id)
	REFERENCES eps.prescription_history (prescription_id);


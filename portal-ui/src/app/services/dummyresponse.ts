export class DummyResponse {
  public getPatient = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "bloodGroup": "B_POSITIVE",
        "contactNo1": 9046787913,
        "contactNo2": 7980231838,
        "discountType": "flat",
        "discount": 20,
        "dobDd": 27,
        "dobMm": 3,
        "dobYy": 1992,
        "firstName": "sourabh",
        "lastName": "sadhu",
        "tsCreated": 1534695098485,
        "age": 24,
        "height": 169,
        "sex": "male",
        "weight": 80,
        "image": null,
        "email": "sadhuait@gmail.com",
        "address1": "Habra Jaigachi Rathtala North 24 Parganas",
        "address2": "Trying to write a pretty looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooong text",
        "pid": 1
      },
      {
        "bloodGroup": "AB_POSITIVE",
        "contactNo2": 9046787913,
        "contactNo1": 7980231838,
        "discountType": "flat",
        "discount": 20,
        "dobDd": 27,
        "dobMm": 3,
        "dobYy": 1992,
        "firstName": "gourab",
        "lastName": "sadhu",
        "age": 20,
        "tsCreated": 1534695098485,
        "weight": 80,
        "image": null,
        "email": "sadhuait@gmail.com",
        "address1": "Habra",
        "address2": "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooong text",
        "pid": 1
      }
    ]
  };

  public getTreatmentPlan = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "trtId": 1,
        "trtDesc": "Root canal treatment",
        "trtname": "RCT",
        "clinicalFinding": 1
      },
      {
        "trtId": 3,
        "trtDesc": "Extraction",
        "trtname": "Extraction",
        "clinicalFinding": 2
      },
      {
        "trtId": 4,
        "trtDesc": "Oral prophylaxis",
        "trtname": "Oral prophylaxis",
        "clinicalFinding": 10
      },
      {
        "trtId": 5,
        "trtDesc": "Restoration statined teeth",
        "trtname": "Restoration Stain",
        "clinicalFinding": 9
      },
      {
        "trtId": 6,
        "trtDesc": "Prosthesis removable",
        "trtname": "Prosthesis Remove",
        "clinicalFinding": 10
      },
      {
        "trtId": 7,
        "trtDesc": "Prosthesis fixed",
        "trtname": "Prosthesis Fixed",
        "clinicalFinding": 10
      },
      {
        "trtId": 8,
        "trtDesc": "Prosthesis implant",
        "trtname": "Prosthesis Implant",
        "clinicalFinding": 10
      },
      {
        "trtId": 10,
        "trtDesc": "Other treatment",
        "trtname": "Other",
        "clinicalFinding": 10
      }
    ]
  };

  public getMedicine = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "medicineName": "med1",
        "ageGroup": "10to30",
        "treatmentId": 1,
        "dosage": "sokale bikale 1 ta khabar por",
        "clinicalAvailability": 7,
        "diseaseCode": "dCode1",
        "diseaseName": "dName1",
        "ageGroupBean": null,
        "treatmentPlan": null,
        "medicineId": 1
      },
      {
        "medicineName": "med2",
        "ageGroup": "10to30",
        "treatmentId": 1,
        "dosage": "sokale bikale 1 ta khabar por",
        "clinicalAvailability": 7,
        "diseaseCode": "dCode2",
        "ageGroupBean": null,
        "treatmentPlan": null,
        "medicineId": 2
      },
      {
        "medicineName": "med3",
        "ageGroup": "10to30",
        "treatmentId": 1,
        "dosage": "sokale bikale 1 ta khabar por",
        "clinicalAvailability": 7,
        "diseaseCode": "dCode3",                
        "medicineId": 3
      }
    ]
  };

  public medicalMaster = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "medicalHistoryName": "Hyperglycaemia",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Hypertension",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Hypotension",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Asthma",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Cerebro vascular accident",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Cardiac diseases",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Hypothyroidism",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Hyperthyroidism",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Drug hypersensitivity",
        "medicalHistories": null
      },
      {
        "medicalHistoryName": "Other",
        "medicalHistories": null
      }
    ]
  };

  getFeeConfig = {
    "status": "SUCCESS",
    "desc": null,
    "resp": {
      "feeConfigId": 18,
      "ageGroupId": "10to30",
      "ageGroupPercent": 10,
      "baseFee": 60,
      "toothGroupId": 2,
      "toothGroupPercent": 10,
      "treatmentPlanId": 1,
      "totalFee": 72,
    }
  }

  getFeeConfigList = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "feeConfigId": 18,
        "ageGroupId": "10to30",
        "ageGroupPercent": 10,
        "baseFee": 60,
        "toothGroupId": 2,
        "toothGroupPercent": 10,
        "treatmentPlanId": 1,
        "totalFee": 72,
      },
      {
        "feeConfigId": -24,
        "ageGroupId": "3to10",
        "ageGroupPercent": 30,
        "baseFee": 89,
        "toothGroupId": 1,
        "toothGroupPercent": 5,
        "treatmentPlanId": 2,
        "totalFee": 119
      }
    ]
  };

  getAgeGroup = {
    "status": "SUCCESS",
    "desc": null,
    "resp": {
      "groupId": "3to13",
      "fromAge": 3,
      "toAge": 13
    }
  };

  clinicalFindingList = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "fdesc": "desc Caries",
        "fid": 1,
        "fname": "Caries"
      },
      {
        "fdesc": "desc Periodontities",
        "fid": 2,
        "fname": "Periodontities"
      },
      {
        "fdesc": "desc Grossly decayed",
        "fid": 3,
        "fname": "Grossly decayed"
      },
      {
        "fdesc": "desc Root stump",
        "fid": 4,
        "fname": "Root stump"
      },
      {
        "fdesc": "desc Attrition",
        "fid": 5,
        "fname": "Attrition"
      },
      {
        "fdesc": "desc Cervical abrasion",
        "fid": 6,
        "fname": "Cervical abrasion"
      },
      {
        "fdesc": "desc Missing tooth",
        "fid": 7,
        "fname": "Missing tooth"
      },
      {
        "fdesc": "desc Calculus",
        "fid": 8,
        "fname": "Calculus"
      },
      {
        "fdesc": "desc Stain",
        "fid": 9,
        "fname": "Stain"
      },
      {
        "fdesc": "other desc",
        "fid": 10,
        "fname": "Others"
      }
    ]
  };

  addonClinicalFinding = {
    "status": "SUCCESS",
    "desc": null,
    "resp":
    {
      "fdesc": "desc Caries",
      "fid": 1,
      "fname": "Caries"
    }
  }

  public toothQuadrentList = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "toothIndex": 41,
        "toothGroup": 1,
        "toothNumber": 1,
        "toothQdr": 4
      },
      {
        "toothIndex": 42,
        "toothGroup": 1,
        "toothNumber": 2,
        "toothQdr": 4
      },
      {
        "toothIndex": 43,
        "toothGroup": 2,
        "toothNumber": 3,
        "toothQdr": 4
      },
      {
        "toothIndex": 44,
        "toothGroup": 2,
        "toothNumber": 4,
        "toothQdr": 4
      },
      {
        "toothIndex": 35,
        "toothGroup": 3,
        "toothNumber": 5,
        "toothQdr": 3
      },
      {
        "toothIndex": 36,
        "toothGroup": 3,
        "toothNumber": 6,
        "toothQdr": 3
      },
      {
        "toothIndex": 37,
        "toothGroup": 4,
        "toothNumber": 7,
        "toothQdr": 3
      },
      {
        "toothIndex": 38,
        "toothGroup": 4,
        "toothNumber": 8,
        "toothQdr": 3
      },
      {
        "toothIndex": 45,
        "toothGroup": 3,
        "toothNumber": 5,
        "toothQdr": 4
      },
      {
        "toothIndex": 46,
        "toothGroup": 3,
        "toothNumber": 6,
        "toothQdr": 4
      },
      {
        "toothIndex": 12,
        "toothGroup": 1,
        "toothNumber": 2,
        "toothQdr": 1
      },
      {
        "toothIndex": 11,
        "toothGroup": 1,
        "toothNumber": 1,
        "toothQdr": 1
      },
      {
        "toothIndex": 14,
        "toothGroup": 2,
        "toothNumber": 4,
        "toothQdr": 1
      },
      {
        "toothIndex": 13,
        "toothGroup": 2,
        "toothNumber": 3,
        "toothQdr": 1
      },
      {
        "toothIndex": 16,
        "toothGroup": 3,
        "toothNumber": 6,
        "toothQdr": 1
      },
      {
        "toothIndex": 15,
        "toothGroup": 3,
        "toothNumber": 5,
        "toothQdr": 1
      },
      {
        "toothIndex": 18,
        "toothGroup": 4,
        "toothNumber": 8,
        "toothQdr": 1
      },
      {
        "toothIndex": 17,
        "toothGroup": 4,
        "toothNumber": 7,
        "toothQdr": 1
      },
      {
        "toothIndex": 22,
        "toothGroup": 1,
        "toothNumber": 2,
        "toothQdr": 2
      },
      {
        "toothIndex": 21,
        "toothGroup": 1,
        "toothNumber": 1,
        "toothQdr": 2
      },
      {
        "toothIndex": 24,
        "toothGroup": 2,
        "toothNumber": 4,
        "toothQdr": 2
      },
      {
        "toothIndex": 23,
        "toothGroup": 2,
        "toothNumber": 3,
        "toothQdr": 2
      },
      {
        "toothIndex": 26,
        "toothGroup": 3,
        "toothNumber": 6,
        "toothQdr": 2
      },
      {
        "toothIndex": 25,
        "toothGroup": 3,
        "toothNumber": 5,
        "toothQdr": 2
      },
      {
        "toothIndex": 28,
        "toothGroup": 4,
        "toothNumber": 8,
        "toothQdr": 2
      },
      {
        "toothIndex": 27,
        "toothGroup": 4,
        "toothNumber": 7,
        "toothQdr": 2
      },
      {
        "toothIndex": 32,
        "toothGroup": 1,
        "toothNumber": 2,
        "toothQdr": 3
      },
      {
        "toothIndex": 31,
        "toothGroup": 1,
        "toothNumber": 1,
        "toothQdr": 3
      },
      {
        "toothIndex": 34,
        "toothGroup": 2,
        "toothNumber": 4,
        "toothQdr": 3
      },
      {
        "toothIndex": 33,
        "toothGroup": 2,
        "toothNumber": 3,
        "toothQdr": 3
      },
      {
        "toothIndex": 48,
        "toothGroup": 4,
        "toothNumber": 8,
        "toothQdr": 4
      },
      {
        "toothIndex": 47,
        "toothGroup": 4,
        "toothNumber": 7,
        "toothQdr": 4
      }
    ]
  };

  public getDashboardView = {
    "status": "SUCCESS",
    "desc": null,
    "resp": [
      {
        "pHistory": {
          "prescriptionId": 34,
          "advice": "general test  advice",
          "chiefComplaint": "general test cc",
          "clinicalFindings": "Periodontities -  33 34 35,Stain -  11 32",
          "investigation": "general test iv",
          "nextAppointment": 1542393000000,
          "note": "general test notes",
          "patientId": 1,
          "provisionalDiagnosis": "general test pd",
          "tsCreated": 1542426489661,
          "tsModified": null
        },
        "fbl": [
          {
            "fId": 34,
            "amount": 500,
            "amountPaid": 0,
            "trtmntPlanRef": 2,
            "notes": "general test fee",
            "patientId": 1,
            "prescriptionId": null,
            "tsCreated": 1542426489787,
            "paymentTs": null
          }
        ],
        "mhv": [
          {
            "medicalHistoryId": 37,
            "medicalHistoryName": "Hypotension",
            "note": null,
            "patientId": 1,
            "prescriptionId": 34,
            "severity": null,
            "startedFrom": 1542426489878
          },
          {
            "medicalHistoryId": 38,
            "medicalHistoryName": "Asthma",
            "note": null,
            "patientId": 1,
            "prescriptionId": 34,
            "severity": null,
            "startedFrom": 1542426489878
          }
        ],
        "medhv": [
          {
            "medId": 20,
            "diseaseCode": "dCode2",
            "diseaseName": null,
            "dosage": "dose",
            "medicineName": "med2",
            "patientId": 1,
            "prescriptionId": 34
          },
          {
            "medId": 21,
            "diseaseCode": "dCode3",
            "diseaseName": null,
            "dosage": "dose",
            "medicineName": "med3",
            "patientId": 1,
            "prescriptionId": 34
          }
        ],
        "tphv": [
          {
            "clinicalFinding": "Periodontities",
            "note": "Test check",
            "patientId": 1,
            "prescriptionId": 34,
            "toothIndex": "35",
            "tsCreated": 1542426513622,
            "tsModified": null,
            "tid": 3,
            "tname": "RCT",
            "status": "Completed"
          },
          {
            "clinicalFinding": "Periodontities",
            "note": "Test check",
            "patientId": 1,
            "prescriptionId": 34,
            "toothIndex": "34",
            "tsCreated": 1542426534816,
            "tsModified": null,
            "tid": 4,
            "tname": "Extraction",
            "status": "Completed"
          },
          {
            "clinicalFinding": "Periodontities",
            "note": "Test check",
            "patientId": 1,
            "prescriptionId": 34,
            "toothIndex": "33",
            "tsCreated": 1542426536451,
            "tsModified": null,
            "tid": 5,
            "tname": "Extraction",
            "status": "Completed"
          },
          {
            "clinicalFinding": "Stain",
            "note": null,
            "patientId": 1,
            "prescriptionId": 34,
            "toothIndex": "11",
            "tsCreated": 1542426537785,
            "tsModified": null,
            "tid": 6,
            "tname": "RCT",
            "status": "Pending"
          },
          {
            "clinicalFinding": "Stain",
            "note": null,
            "patientId": 1,
            "prescriptionId": 34,
            "toothIndex": "32",
            "tsCreated": 1542426542147,
            "tsModified": null,
            "tid": 7,
            "tname": "RCT",
            "status": "Pending"
          }
        ]
      }
    ]
  };
}
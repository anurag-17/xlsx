import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apidata } from "../action/apiaction";
import { logout } from "../action/useraction";
import { Header } from "./Header";
import { LOader } from "./LOader";
import { Pagination } from "./Pagination";
import { SideNavigation } from "./SideNavigation";
import"./viewlist.css"

export const Viewlist = () => {
  // const { loading} = useSelector((state) =>state.apidata);
  const [editdata, seteditdata] = useState([]);
  const filedata=[[{
    "_id":  "6347f35856f0e603b867aa36"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SUJATHA PARRI",
    "Member ID": "'090089029002102",
    "Cell No": "'7025411254",
    "Father / Husband Name": "NADAVA PARRI",
    "aadharNo": "'233437767543",
    "Mobile Number": "'7025411254",
    "membercaste": "SC",
    "AGE": 31,
    "Member status": "First Leader",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa37"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "NEELAVENI GUNDABATHINA",
    "Member ID": "'090089029002103",
    "Cell No": "'9502648710",
    "Father / Husband Name": "THIRUPALU GUNDABATHINA",
    "aadharNo": "'843864799955",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 41,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa38"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SESHAMMA DAVULURI",
    "Member ID": "'090089029002104",
    "Cell No": "'9502648710",
    "Father / Husband Name": "KONDAIAH DAVULURI",
    "aadharNo": "'850539254365",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 41,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa39"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "KONDAMMA GUNDABATHINA",
    "Member ID": "'090089029002105",
    "Cell No": "'9502648710",
    "Father / Husband Name": "KONDAIAH GUNDABATHINA",
    "aadharNo": "'682680609381",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 45,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3a"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SESHAMMA DAVULURI",
    "Member ID": "'090089029002106",
    "Cell No": "'9502648710",
    "Father / Husband Name": "MALYDRI DVULURI",
    "aadharNo": "'616005744063",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 43,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3b"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "ANKAMMA GUNDABATHINA",
    "Member ID": "'090089029002107",
    "Cell No": "'9502648710",
    "Father / Husband Name": "NANDA KUMAR GUNDABATHINA",
    "aadharNo": "'380935674508",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 44,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3c"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "MAMATHA PARRI",
    "Member ID": "'090089029002109",
    "Cell No": "'9502648710",
    "Father / Husband Name": "SHIVA PARRI",
    "aadharNo": "'951360396012",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 24,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3d"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SUKANYA DAVULURI",
    "Member ID": "'090089029002110",
    "Cell No": "'9502648710",
    "Father / Husband Name": "MALYDRI GUNDABATHINA",
    "aadharNo": "'993633938177",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 43,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3e"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "CHINNAANKAMMA DAVULURI",
    "Member ID": "'090089029002111",
    "Cell No": "'9502648710",
    "Father / Husband Name": "CHENCHAIAH DAVULURI",
    "aadharNo": "'665782333232",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 42,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa3f"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "AMARAVENI GUNDABATHINA",
    "Member ID": "'090089029002112",
    "Cell No": "'9502648710",
    "Father / Husband Name": "CHINNAIAH GUNDABATHINA",
    "aadharNo": "'886392983272",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 41,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa40"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'017",
    "slum name": "BUDAMGUNTA",
    "Slum Id": "'029",
    "SHG ID": "'0900890290021",
    "SHG Name": "THIRUPATHI PODHUPU SANGAM",
    "Date Of Formation": "23/01/2006",
    "caste": "Sc",
    "SB Account No": "'03XXXXXXXX31786",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "NAGAMANI JUGUNTA",
    "Member ID": "'090089029002113",
    "Cell No": "'9502648710",
    "Father / Husband Name": "MALAKONDAIAH JUGUNTA",
    "aadharNo": "'845902075197",
    "Mobile Number": "'9502648710",
    "membercaste": "SC",
    "AGE": 32,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa41"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "KAMESWARI NEELI",
    "Member ID": "'090089002000601",
    "Cell No": "'9298701766",
    "Father / Husband Name": "DHANUNJAYARAO NEELI",
    "aadharNo": "'372668282592",
    "Mobile Number": "'9298701766",
    "membercaste": "OBC",
    "AGE": 48,
    "Member status": "Second leader",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa42"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "MASTHANAMMA MANDA",
    "Member ID": "'090089002000602",
    "Cell No": "'8125816685",
    "Father / Husband Name": "RAMESH BABU MANDA",
    "aadharNo": "'983704457555",
    "Mobile Number": "'8125816685",
    "membercaste": "OBC",
    "AGE": 48,
    "Member status": "First Leader",
    "address": "sapotaThoa",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa43"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SAILAJA NEELI",
    "Member ID": "'090089002000604",
    "Cell No": "'7842740790",
    "Father / Husband Name": "DHANUNJAYARAO NEELI",
    "aadharNo": "'949342419412",
    "Mobile Number": "'7842740790",
    "membercaste": "OBC",
    "AGE": 30,
    "Member status": "Member",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa44"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "VENKATA SUJATHA DEVARALA",
    "Member ID": "'090089002000605",
    "Cell No": "'9347118952",
    "Father / Husband Name": "VENKATA SURESH DEVARALA",
    "aadharNo": "'994925390791",
    "Mobile Number": "'9347118952",
    "membercaste": "OBC",
    "AGE": 30,
    "Member status": "Member",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa45"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "SESHAMMA KANDULA",
    "Member ID": "'090089002000606",
    "Cell No": "'9505192827",
    "Father / Husband Name": "SUBRAMANYAM KANDULA",
    "aadharNo": "'973788095372",
    "Mobile Number": "'9505192827",
    "membercaste": "OBC",
    "AGE": 41,
    "Member status": "Member",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa46"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "RAJESWARI KOLLIPARA",
    "Member ID": "'090089002000608",
    "Cell No": "'9393034103",
    "Father / Husband Name": "RAJASHEKAR KOLLIPARA",
    "aadharNo": "'662477380369",
    "Mobile Number": "'9393034103",
    "membercaste": "OBC",
    "AGE": 57,
    "Member status": "Book Keeper",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa47"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "AUDHILAKSHMI PUCHAKATLA",
    "Member ID": "'090089002000609",
    "Cell No": "'9885507473",
    "Father / Husband Name": "SRINIVASULU PUCHAKATLA",
    "aadharNo": "'765615924058",
    "Mobile Number": "'9885507473",
    "membercaste": "OBC",
    "AGE": 48,
    "Member status": "Member",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa48"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "RAMADEVI YADLAPUDI",
    "Member ID": "'090089002000610",
    "Cell No": "'7013612317",
    "Father / Husband Name": "CHAKRAPANI YADLAPUDI",
    "aadharNo": "'501077873110",
    "Mobile Number": "'7013612317",
    "membercaste": "OBC",
    "AGE": 55,
    "Member status": "Member",
    "address": "SapotaThota",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa49"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "PASUPULETI MANJULA",
    "Member ID": "'090089002000611",
    "Cell No": "'7382924996",
    "Father / Husband Name": "PASUPULETI MASTHAN BABU",
    "aadharNo": "'476425840473",
    "Mobile Number": "'7382924996",
    "membercaste": "OBC",
    "AGE": 39,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa4a"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890020006",
    "SHG Name": "Vengaiah Swamy",
    "Date Of Formation": 40427,
    "caste": "Others",
    "SB Account No": "'03XXXXXXXX06931",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "PASUPULETI SUPRAJA",
    "Member ID": "'090089002000612",
    "Cell No": "'8309394091",
    "Father / Husband Name": "PASUPULETI Ganesh Kumar",
    "aadharNo": "'583514190703",
    "Mobile Number": "'8309394091",
    "membercaste": "Others",
    "AGE": 30,
    "Member status": "Member",
    "__v": 0
  },{
    "_id":  "6347f35856f0e603b867aa4b"
    ,
    "Name of the District": "SPSR Nellore",
    "Name of the ULB": "Kavali",
    "TLF Name": "Kavali",
    "TLF ID": "'0900891",
    "SLF Name": "Pathavuru Block I nd",
    "SLF ID": "'0900890011",
    "ward Name": "'002",
    "slum name": "Old Town Block -1",
    "Slum Id": "'001",
    "SHG ID": "'0900890010040",
    "SHG Name": "Sri Lakshmi Durga Group",
    "Date Of Formation": 36717,
    "caste": "Bc",
    "SB Account No": "'03XXXXXXXX33080",
    "Bank name": "ANDHRA BANK",
    "Branch": "KAVALI",
    "IFSC Code": "ANDB0000309",
    "SHG Member Name": "JAYALAKSHMI Marriboina",
    "Member ID": "'090089001004001",
    "Cell No": "'9290229914",
    "Father / Husband Name": "VENKATESWARLU Marriboina",
    "aadharNo": "'712967024144",
    "Mobile Number": "'9290229914",
    "membercaste": "OBC",
    "AGE": 54,
    "Member status": "First Leader",
    "address": "6-7-9B",
    "__v": 0
  }]]
  console.log(filedata.length);
  // const [data, setdata] = useState([]);
  const [keys, setKeys] = useState([]);
  const [object, setObject] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  
  const nPages = Math.ceil(filedata.length / recordsPerPage);
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  
  let currentRecords = filedata.slice(indexOfFirstRecord, indexOfLastRecord);
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const { user, isAuthenticated, } = useSelector((state) =>state.user);

  const getdata = async () => {
    // dispatch(apidata())
    // setdata(res.data);
    // res.data.map((items, index) => {
    //   // console.log(items);
    //   if (index === 1) {
    //     setKeys(Object.keys(items));
    //   }
    //   // console.log(keys);
    // });
  };
  let pagelimit=20
  if(isAuthenticated=== false){
    navigate("/")
  }
  if(user.role==="user"){
    dispatch(logout())
    navigate("/employeelogin")
  }
 console.log(filedata);
  useEffect(() => {
    getdata()
  }, []);
  const edit = async (id) => {
    console.log(id);
    let res = await axios.post(`http://localhost:5000/edit`,{id})
    let datat = await res.data;
    console.log(datat);
    seteditdata(datat)
    // setflag(false)
  }
  const fmap = () => {
    try {
      // console.log(data);
      const ffmap = currentRecords[0].map((row, index) => {
        // console.log(row);
        return (
          <tr>
            {Object.keys(currentRecords[0][0]).map((key, index) => {
              // console.log([key]);
              return <td>{row[key]}</td>;
            })}
            <button type="button" className="btn btn-primary m-2" data-toggle="modal" data-target="#exampleModal"onClick={() => { edit(row["_id"]) }}>edit</button>

          </tr>
        );
      });
      return ffmap;
    } catch (error) {
      console.log(error);
    }
  };
  const hmap = () => {
    try {
      const hhmap = Object.keys(currentRecords[0][0]).map((heading) => {
        // console.log(heading);
        return <th>{heading}</th>;
      });
      return hhmap;
    } catch (error) {
      console.log(error);
    }
  };
  const edithandle = (e) => {
    const { name, value } = e.target
    seteditdata({ ...editdata, [name]: value })
  }
  const update = async (e) => {
    e.preventDefault();
console.log(editdata);

    let res = await axios.put("http://localhost:5000/update", editdata)
    let data = await res.data
    console.log(data);



  }
  return (
    <div>
      <Header/>

        <SideNavigation/>
      {(<><div className="AddFlex">
        <div style={{width:"100%"}}>
          {filedata.length !==0 ? (
            <>
              <div
                style={{ overflow: "scroll", width: "70%", margin: "80px 21%" }}
                className="table-responsive"
              >
                <table className="table" responsive="true">
                  <thead>
                    <tr>{<>{hmap()}<th>edit</th></>}</tr>
                  </thead>
                  <tbody>{fmap()}</tbody>
                </table>
              </div>
              <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            disabledClass
          />
            </>
          ) : (
            ""
          )}
        </div>
      </div></>)}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={update}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="name" className="form-control" name='name' id="exampleInputEmail1" value={editdata.name} onChange={edithandle} aria-describedby="emailHelp" placeholder="Enter email" />

              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="text" className="form-control" name='email' value={editdata.email} onChange={edithandle} id="exampleInputPassword1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Date of Birth</label>
                <input type="date" className="form-control" name='dob' value={editdata.dob} onChange={edithandle} id="exampleInputPassword1" placeholder="Date of Birth" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Roll-no</label>
                <input type="number" className="form-control" name='rollno' value={editdata.rollno} onChange={edithandle} id="exampleInputPassword1" placeholder="Roll-no" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>


              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

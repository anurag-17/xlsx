import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";
import "./BankForm.css";
import {
  clearErrors,
  loaduser,
  logout,
  updateprofile,
  uploadform,
} from "../action/useraction";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { useAlert } from "react-alert";

export const BankForm = () => {
  const [formdata, setFormdata] = useState([{}]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user, isAuthenticated, error, isUpdated } = useSelector(
    (state) => state.user
  );
  if (user === null) {
    navigate("/employeelogin");
  }
  useEffect(() => {
    if (error) {
      alert.error(error.message);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success(isUpdated.message);
      dispatch(clearErrors());
      setSaving({
        opening_savings: "",
        current_year_savings: "",
        total_savings: "",
      });
      setSlfloan({
        opening_loans: "",
        current_year_sanctioned: "",
        current_year_recovery: "",
        total_loan_outstanding: "",
      });
      setBankloan({
        bank_opening_bank_loan: "",
        bank_current_year_sanctioned: "",
        bank_current_year_recovery: "",
        bank_total_loan_outstanding: "",
      });
      setSrinidhiLoan({
        srinidhi_opening_loan: "",
        srinidhi_current_year_sanctioned: "",
        srinidhi_current_year_recovery: "",
        srinidhi_total_loan_outstanding: "",
      });
      setCovidloan({
        covid_opening_loan: "",
        covid_current_year_sanctioned: "",
        covid_current_year_recovery: "",
        covid_total_loan_outstanding: "",
      });
      setInternalMemberLoan({
        iml_opening_loan: "",
        iml_current_year_sanctioned: "",
        iml_current_year_recovery: "",
        iml_total_loan_outstanding: "",
      });
      setSlfMemberLoan({
        slfm_opening_loan: "",
        slfm_current_year_sanctioned: "",
        slfm_current_year_recovery: "",
        slfm_total_loan_outstanding: "",
      });
      setBankLinkageMemberLoan({
        blml_opening_loan: "",
        blml_current_year_sanctioned: "",
        blml_current_year_recovery: "",
        blml_total_loan_outstanding: "",
      });
      setSrinidhiMemberLoan({
        srim_opening_loan: "",
        srim_current_year_sanctioned: "",
        srim_current_year_recovery: "",
        srim_total_loan_outstanding: "",
      });
      setCovidMemberLoans({
        cml_opening_loan: "",
        cml_current_year_sanctioned: "",
        cml_current_year_recovery: "",
        cml_total_loan_outstanding: "",
      });
      setOpeningBankBalance({
        opening_bank_balance: "",
        opening_cash: "",
        closing_bank_balance: "",
        closing_cash: "",
        surplus: "",
      });
    }
  }, [isAuthenticated, user, error, isUpdated, alert, dispatch]);
  
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [sghid, setsghid] = useState("");

  const [bankdetail, setBankdetail] = useState({
    bank_name: "",
    acc_number: "",
  });
  const [year, setYear] = useState();

  const [saving, setSaving] = useState({
    opening_savings: "",
    current_year_savings: "",
    total_savings: "",
  });
  const [slfloan, setSlfloan] = useState({
    opening_loans: "",
    current_year_sanctioned: "",
    current_year_recovery: "",
    total_loan_outstanding: "",
  });
  const [bankloan, setBankloan] = useState({
    bank_opening_bank_loan: "",
    bank_current_year_sanctioned: "",
    bank_current_year_recovery: "",
    bank_total_loan_outstanding: "",
  });
  const [srinidhiLoan, setSrinidhiLoan] = useState({
    srinidhi_opening_loan: "",
    srinidhi_current_year_sanctioned: "",
    srinidhi_current_year_recovery: "",
    srinidhi_total_loan_outstanding: "",
  });
  const [covidloan, setCovidloan] = useState({
    covid_opening_loan: "",
    covid_current_year_sanctioned: "",
    covid_current_year_recovery: "",
    covid_total_loan_outstanding: "",
  });
  const [internalMemberLoan, setInternalMemberLoan] = useState({
    iml_opening_loan: "",
    iml_current_year_sanctioned: "",
    iml_current_year_recovery: "",
    iml_total_loan_outstanding: "",
  });
  const [slfMemberLoan, setSlfMemberLoan] = useState({
    slfm_opening_loan: "",
    slfm_current_year_sanctioned: "",
    slfm_current_year_recovery: "",
    slfm_total_loan_outstanding: "",
  });
  const [bankLinkageMemberLoan, setBankLinkageMemberLoan] = useState({
    blml_opening_loan: "",
    blml_current_year_sanctioned: "",
    blml_current_year_recovery: "",
    blml_total_loan_outstanding: "",
  });
  const [srinidhiMemberLoan, setSrinidhiMemberLoan] = useState({
    srim_opening_loan: "",
    srim_current_year_sanctioned: "",
    srim_current_year_recovery: "",
    srim_total_loan_outstanding: "",
  });
  const [covidMemberLoans, setCovidMemberLoans] = useState({
    cml_opening_loan: "",
    cml_current_year_sanctioned: "",
    cml_current_year_recovery: "",
    cml_total_loan_outstanding: "",
  });
  const [openingBankBalance, setOpeningBankBalance] = useState({
    opening_bank_balance: "",
    opening_cash: "",
    closing_bank_balance: "",
    closing_cash: "",
    surplus: "",
  });
  let accnu = bankdetail.acc_number;
  let bank_name = bankdetail.bank_name;
  let Slum_Id = bankdetail["Slum Id"];
  let Name_of_the_District = bankdetail["Name of the District"];
  let ward_Name = bankdetail["ward Name"];
  let Name_of_ulb = bankdetail["Name of the ULB"];
  let SHG_Name = bankdetail["SHG Name"];
  let TLF_NAME = bankdetail["TLF NAME"];
  let SHG_ID = bankdetail["SHG ID"];
  let SLF_NAME = bankdetail["SLF NAME"];
  let opening_savings = saving.opening_savings;
  let current_year_savings = saving.current_year_savings;
  let total_savings = saving.total_savings;
  let opening_loans = slfloan.opening_loans;
  let current_year_sanctioned = slfloan.current_year_sanctioned;
  let current_year_recovery = slfloan.current_year_recovery;
  let total_loan_outstanding = slfloan.total_loan_outstanding;
  let bank_opening_bank_loan = bankloan.bank_opening_bank_loan;
  let bank_current_year_sanctioned = bankloan.bank_current_year_sanctioned;
  let bank_current_year_recovery = bankloan.bank_current_year_recovery;
  let bank_total_loan_outstanding = bankloan.bank_total_loan_outstanding;
  let srinidhi_opening_loan = srinidhiLoan.srinidhi_opening_loan;
  let srinidhi_current_year_sanctioned =
  srinidhiLoan.srinidhi_current_year_sanctioned;
  let srinidhi_current_year_recovery =
    srinidhiLoan.srinidhi_current_year_recovery;
    let srinidhi_total_loan_outstanding =
    srinidhiLoan.srinidhi_total_loan_outstanding;
    let covid_opening_loan = covidloan.covid_opening_loan;
    let covid_current_year_sanctioned = covidloan.covid_current_year_sanctioned;
  let covid_current_year_recovery = covidloan.covid_current_year_recovery;
  let covid_total_loan_outstanding = covidloan.covid_total_loan_outstanding;
  let iml_opening_loan = internalMemberLoan.iml_opening_loan;
  let iml_current_year_sanctioned =
    internalMemberLoan.iml_current_year_sanctioned;
    let iml_current_year_recovery = internalMemberLoan.iml_current_year_recovery;
  let iml_total_loan_outstanding =
  internalMemberLoan.iml_total_loan_outstanding;
  let slfm_opening_loan = slfMemberLoan.slfm_opening_loan;
  let slfm_current_year_sanctioned = slfMemberLoan.slfm_current_year_sanctioned;
  let slfm_current_year_recovery = slfMemberLoan.slfm_current_year_recovery;
  let slfm_total_loan_outstanding = slfMemberLoan.slfm_total_loan_outstanding;
  let blml_opening_loan = bankLinkageMemberLoan.blml_opening_loan;
  let blml_current_year_sanctioned =
  bankLinkageMemberLoan.blml_current_year_sanctioned;
  let blml_current_year_recovery =
    bankLinkageMemberLoan.blml_current_year_recovery;
  let blml_total_loan_outstanding =
  bankLinkageMemberLoan.blml_total_loan_outstanding;
  let srim_opening_loan = srinidhiMemberLoan.srim_opening_loan;
  let srim_current_year_sanctioned =
    srinidhiMemberLoan.srim_current_year_sanctioned;
    let srim_current_year_recovery =
    srinidhiMemberLoan.srim_current_year_recovery;
    let srim_total_loan_outstanding =
    srinidhiMemberLoan.srim_total_loan_outstanding;
    let cml_opening_loan = covidMemberLoans.cml_opening_loan;
    let cml_current_year_sanctioned =
    covidMemberLoans.cml_current_year_sanctioned;
  let cml_current_year_recovery = covidMemberLoans.cml_current_year_recovery;
  let cml_total_loan_outstanding = covidMemberLoans.cml_total_loan_outstanding;
  let opening_bank_balance = openingBankBalance.opening_bank_balance;
  let opening_cash = openingBankBalance.opening_cash;
  let closing_bank_balance = openingBankBalance.closing_bank_balance;
  let closing_cash = openingBankBalance.closing_cash;
  let surplus = openingBankBalance.surplus;
  let SHGID = "";
  // const inputsgh=(e)=>{setSHGID(e.target.value);searchSHG()}
  const inputA = (e) => {
    setBankdetail({ ...bankdetail, [e.target.name]: e.target.value });
  };
  const inputB = (e) => {
    setSaving({ ...saving, [e.target.name]: e.target.value });
  };
  const inputB_b = (e) => {
    setSlfloan({ ...slfloan, [e.target.name]: e.target.value });
  };
  const inputC = (e) => {
    setBankloan({ ...bankloan, [e.target.name]: e.target.value });
  };
  const inputC_c = (e) => {
    setSrinidhiLoan({ ...srinidhiLoan, [e.target.name]: e.target.value });
  };
  const inputD = (e) => {
    setCovidloan({ ...covidloan, [e.target.name]: e.target.value });
  };
  console.log(SLF_NAME);
  const inputD_d = (e) => {
    setInternalMemberLoan({
      ...internalMemberLoan,
      [e.target.name]: e.target.value,
    });
  };
  const inputE = (e) => {
    setSlfMemberLoan({ ...slfMemberLoan, [e.target.name]: e.target.value });
  };
  const inputE_e = (e) => {
    setBankLinkageMemberLoan({
      ...bankLinkageMemberLoan,
      [e.target.name]: e.target.value,
    });
  };
  const inputF = (e) => {
    setSrinidhiMemberLoan({
      ...srinidhiMemberLoan,
      [e.target.name]: e.target.value,
    });
  };
  const inputF_f = (e) => {
    setCovidMemberLoans({
      ...covidMemberLoans,
      [e.target.name]: e.target.value,
    });
  };
  const inputG = (e) => {
    setOpeningBankBalance({
      ...openingBankBalance,
      [e.target.name]: e.target.value,
    });
  };

  const chkb1 = (e) => {
    let checkboxB1 = document.getElementById("chkB1");
    if (checkboxB1.checked === true) {
      setSaving({
        opening_savings: "0",
        current_year_savings: "0",
        total_savings: "0",
      });
    } else {
      setSaving({
        opening_savings: "",
        current_year_savings: "",
        total_savings: "",
      });
    }
  };
  const chkb2 = () => {
    let checkboxB2 = document.getElementById("chkB2");
    if (checkboxB2.checked === true) {
      setSlfMemberLoan({
        slfm_opening_loan: "0",
        slfm_current_year_sanctioned: "0",
        slfm_current_year_recovery: "0",
      });
    } else {
      setSlfMemberLoan({
        slfm_opening_loan: "",
        slfm_current_year_sanctioned: "",
        slfm_current_year_recovery: "",
      });
    }
  };
  const chkc1 = () => {
    let checkboxC1 = document.getElementById("chkC1");
    if (checkboxC1.checked === true) {
      setBankloan({
        bank_opening_bank_loan: "0",
        bank_current_year_sanctioned: "0",
        bank_current_year_recovery: "0",
      });
    } else {
      setBankloan({
        bank_opening_bank_loan: "",
        bank_current_year_sanctioned: "",
        bank_current_year_recovery: "",
      });
    }
  };
  const chkc2 = () => {
    let checkboxC2 = document.getElementById("chkC2");
    if (checkboxC2.checked === true) {
      setSrinidhiMemberLoan({
        srim_opening_loan: "0",
        srim_current_year_sanctioned: "0",
        srim_current_year_recovery: "0",
      });
    } else {
      setSrinidhiMemberLoan({
        srim_opening_loan: "",
        srim_current_year_sanctioned: "",
        srim_current_year_recovery: "",
      });
    }
  };

  const chkd1 = () => {
    let checkboxD1 = document.getElementById("chkD1");
    if (checkboxD1.checked === true) {
      setCovidloan({
        covid_opening_loan: "0",
        covid_current_year_sanctioned: "0",
        covid_current_year_recovery: "0",
      });
    } else {
      setCovidloan({
        covid_opening_loan: "",
        covid_current_year_sanctioned: "",
        covid_current_year_recovery: "",
      });
    }
  };
  const chkd2 = () => {
    let checkboxD2 = document.getElementById("chkD2");
    if (checkboxD2.checked === true) {
      setInternalMemberLoan({
        iml_opening_loan: "0",
        iml_current_year_sanctioned: "0",
        iml_current_year_recovery: "0",
      });
    } else {
      setInternalMemberLoan({
        iml_opening_loan: "",
        iml_current_year_sanctioned: "",
        iml_current_year_recovery: "",
      });
    }
  };
  const chke1 = () => {
    let checkboxE1 = document.getElementById("chkE1");
    if (checkboxE1.checked === true) {
      setSlfloan({
        opening_loans: "0",
        current_year_sanctioned: "0",
        current_year_recovery: "0",
      });
    } else {
      setSlfloan({
        opening_loans: "",
        current_year_sanctioned: "",
        current_year_recovery: "",
      });
    }
  };

  const chke2 = () => {
    let checkboxE2 = document.getElementById("chkE2");
    if (checkboxE2.checked === true) {
      setBankLinkageMemberLoan({
        blml_opening_loan: "0",
        blml_current_year_sanctioned: "0",
        blml_current_year_recovery: "0",
      });
    } else {
      setBankLinkageMemberLoan({
        blml_opening_loan: "",
        blml_current_year_sanctioned: "",
        blml_current_year_recovery: "",
      });
    }
  };

  const chkf1 = () => {
    let checkboxF1 = document.getElementById("chkF1");
    if (checkboxF1.checked === true) {
      setSrinidhiLoan({
        srinidhi_opening_loan: "0",
        srinidhi_current_year_sanctioned: "0",
        srinidhi_current_year_recovery: "0",
      });
    } else {
      setSrinidhiLoan({
        srinidhi_opening_loan: "",
        srinidhi_current_year_sanctioned: "",
        srinidhi_current_year_recovery: "",
      });
    }
  };
  const chkf2 = () => {
    let checkboxF2 = document.getElementById("chkF2");
    if (checkboxF2.checked === true) {
      setCovidMemberLoans({
        cml_opening_loan: "0",
        cml_current_year_sanctioned: "0",
        cml_current_year_recovery: "0",
      });
    } else {
      setCovidMemberLoans({
        cml_opening_loan: "",
        cml_current_year_sanctioned: "",
        cml_current_year_recovery: "",
      });
    }
  };
  const chkg1 = () => {
    let checkboxG1 = document.getElementById("chkG1");
    if (checkboxG1.checked === true) {
      setOpeningBankBalance({
        opening_bank_balance: "0",
        opening_cash: "0",
        closing_bank_balance: "0",
        closing_cash: "0",
        surplus: "0",
      });
    } else {
      setOpeningBankBalance({
        opening_bank_balance: "",
        opening_cash: "",
        closing_bank_balance: "",
        closing_cash: "",
        surplus: "",
      });
    }
  };

  const searchSHG = async (e) => {
    e.preventDefault();
    // SHGID = e.target.value;
    // console.log(SHGID);
    // setsghid(SHGID);
    console.log(sghid);
    const res = await axios.post("/api/auth/finddata", {
      sghid,
    });
    console.log(res);
    console.log(res);
    setBankdetail({
      ...bankdetail,
      bank_name: res.data["Bank name"],
      acc_number: res.data["SB Account No"],
      "Slum Id": res.data["Slum Id"],
      "Name of the District": res.data["Name of the District"],
      "ward Name": res.data["ward Name"],
      "SHG Name": res.data["SHG Name"],
      "Name of the ULB": res.data["Name of the ULB"],
      "TLF NAME": res.data["TLF Name"],
      "SLF NAME": res.data["SLF Name"],
      "SGH ID": res.data["SGH ID"],
    });
  };
  //  useEffect(() => {

  //   setFormdata( )
  //  });

  console.log(bankdetail);
  const form_submit = (e) => {
    e.preventDefault();

    setBankdetail(bankdetail);
    setSaving(
      saving,
      (saving.total_savings =
        parseInt(saving.opening_savings) +
        parseInt(saving.current_year_savings))
    );
    setSlfloan(
      slfloan,
      (slfloan.total_loan_outstanding =
        parseInt(slfloan.opening_loans) +
        parseInt(
          parseInt(
            parseInt(slfloan.current_year_sanctioned) -
              parseInt(slfloan.current_year_recovery)
          )
        ))
    );
    setBankloan(
      bankloan,
      (bankloan.bank_total_loan_outstanding =
        parseInt(bankloan.bank_opening_bank_loan) +
        parseInt(
          parseInt(bankloan.bank_current_year_sanctioned) -
            parseInt(bankloan.bank_current_year_recovery)
        ))
    );
    setSrinidhiLoan(
      srinidhiLoan,
      (srinidhiLoan.srinidhi_total_loan_outstanding =
        parseInt(srinidhiLoan.srinidhi_opening_loan) +
        parseInt(
          parseInt(srinidhiLoan.srinidhi_current_year_sanctioned) -
            parseInt(srinidhiLoan.srinidhi_current_year_recovery)
        ))
    );
    setCovidloan(
      covidloan,
      (covidloan.covid_total_loan_outstanding =
        parseInt(covidloan.covid_opening_loan) +
        parseInt(
          parseInt(covidloan.covid_current_year_sanctioned) -
            parseInt(covidloan.covid_current_year_recovery)
        ))
    );
    setInternalMemberLoan(
      internalMemberLoan,
      (internalMemberLoan.iml_total_loan_outstanding =
        parseInt(internalMemberLoan.iml_opening_loan) +
        parseInt(
          parseInt(internalMemberLoan.iml_current_year_sanctioned) -
            parseInt(internalMemberLoan.iml_current_year_recovery)
        ))
    );
    setSlfMemberLoan(
      slfMemberLoan,
      (slfMemberLoan.slfm_total_loan_outstanding =
        parseInt(slfMemberLoan.slfm_opening_loan) +
        parseInt(
          parseInt(slfMemberLoan.slfm_current_year_sanctioned) -
            parseInt(slfMemberLoan.slfm_current_year_recovery)
        ))
    );
    setBankLinkageMemberLoan(
      bankLinkageMemberLoan,
      (bankLinkageMemberLoan.blml_total_loan_outstanding =
        parseInt(bankLinkageMemberLoan.blml_opening_loan) +
        parseInt(
          parseInt(bankLinkageMemberLoan.blml_current_year_sanctioned) -
            parseInt(bankLinkageMemberLoan.blml_current_year_recovery)
        ))
    );
    setSrinidhiMemberLoan(
      srinidhiMemberLoan,
      (srinidhiMemberLoan.srim_total_loan_outstanding =
        parseInt(srinidhiMemberLoan.srim_opening_loan) +
        parseInt(
          parseInt(srinidhiMemberLoan.srim_current_year_sanctioned) -
            parseInt(srinidhiMemberLoan.srim_current_year_recovery)
        ))
    );
    setCovidMemberLoans(
      covidMemberLoans,
      (covidMemberLoans.cml_total_loan_outstanding =
        parseInt(covidMemberLoans.cml_opening_loan) +
        parseInt(
          parseInt(covidMemberLoans.cml_current_year_sanctioned) -
            parseInt(covidMemberLoans.cml_current_year_recovery)
        ))
    );
    setOpeningBankBalance(openingBankBalance);

    console.log(year);
    dispatch(
      updateprofile([
        {
          sghid,
          accnu,
          bank_name,
          opening_savings,
          current_year_savings,
          total_savings,
          year,
          opening_loans,
          Slum_Id,
          TLF_NAME,
          SLF_NAME,
          SHG_ID,
          SHG_Name,
          Name_of_ulb,
          Name_of_the_District,
          ward_Name,
          current_year_sanctioned,
          current_year_recovery,
          total_loan_outstanding,
          bank_opening_bank_loan,
          bank_current_year_sanctioned,
          bank_current_year_recovery,
          bank_total_loan_outstanding,
          srinidhi_opening_loan,
          srinidhi_current_year_sanctioned,
          srinidhi_current_year_recovery,
          srinidhi_total_loan_outstanding,
          covid_opening_loan,
          covid_current_year_sanctioned,
          covid_current_year_recovery,
          covid_total_loan_outstanding,
          iml_opening_loan,
          iml_current_year_sanctioned,
          iml_current_year_recovery,
          iml_total_loan_outstanding,
          slfm_opening_loan,
          slfm_current_year_sanctioned,
          slfm_current_year_recovery,
          slfm_total_loan_outstanding,
          blml_opening_loan,
          blml_current_year_sanctioned,
          blml_current_year_recovery,
          blml_total_loan_outstanding,
          srim_opening_loan,
          srim_current_year_sanctioned,
          srim_current_year_recovery,
          srim_total_loan_outstanding,
          cml_opening_loan,
          cml_current_year_sanctioned,
          cml_current_year_recovery,
          cml_total_loan_outstanding,
          opening_bank_balance,
          opening_cash,
          closing_bank_balance,
          closing_cash,
          surplus,
        },
      ])
    );
    console.log(formdata);
    console.log(SHGID);
    console.log(bankdetail.acc_number);
    console.log(saving);
    console.log(slfloan);
    console.log(bankloan);
    console.log(srinidhiLoan);
    console.log(covidloan);

    console.log(internalMemberLoan);
    console.log(slfMemberLoan);
    console.log(bankLinkageMemberLoan);
    console.log(srinidhiMemberLoan);
    console.log(covidMemberLoans);
    console.log(openingBankBalance);

    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setChecked5(false);
    setChecked6(false);
    setChecked7(false);
    setChecked8(false);
    setChecked9(false);
    setChecked10(false);

    console.log(sghid, accnu, bank_name);
  };
  // console.log();
  const buut = () => {};
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  const logoutUser = () => {
    dispatch(logout());
    navigate("/employeelogin");
  };
  // console.log(year);
  return (
    <>
      <div style={{ position: "absolute", right: "40px" }}>
        {" "}
        <span className="home_btn">
          {isAuthenticated === true ? (
            <>
              <div>
                <ul className="navbar-nav top-btn ml-auto">
                  <button style={{}} className="user_btn">
                    {uppercaseWords(user.email)}
                  </button>

                  <a>
                    <button onClick={logoutUser} className="btn btn-2">
                      Logout
                    </button>{" "}
                  </a>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </span>
      </div>

      <div className="container">
        <form onSubmit={searchSHG} className="flexsearchX ">
          <p>SHGID </p>

          <input
            required
            type="text"
            onChange={(e) => {
              setsghid(e.target.value);
            }}
            placeholder="search by SHG ID"
            name="search"
          />
          <button onClick={searchSHG}>Seacrh </button>
        </form>
        <label>{bankdetail["SHG Name"]}</label>
        <form action="" encType="multipart/form-data" onSubmit={form_submit}>
          <div className="sectionA">
            <div className="flexAX">
              <div className="flexBXf">
                <h4>Bank Details</h4>
                <div className="flexTopX ">
                  <div className="flexC givmargin givpad">
                    <p>Bank name</p>
                    <input
                      type="text"
                      name="bank_name"
                      onChange={inputA}
                      value={bankdetail.bank_name}
                    />
                  </div>
                  <div className="flexC givmargin givpadd">
                    <p>Account Number</p>
                    <input
                      type="text"
                      name="acc_number"
                      onChange={inputA}
                      value={bankdetail.acc_number}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////              */}
          {/* sectionB */}
          <div className="sectionB">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>Saving</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkB1"
                      onClick={chkb1}
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Savings</p>
                  <input
                    required
                    type="text"
                    name="opening_savings"
                    value={saving.opening_savings}
                    onChange={inputB}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Savings</p>
                  <input
                    required
                    type="text"
                    name="current_year_savings"
                    value={saving.current_year_savings}
                    onChange={inputB}
                  />
                </div>
                <div className="flexC">
                  <p>Total Savings</p>
                  <input
                    required
                    type="number"
                    name="total_savings"
                    onChange={inputB}
                    value={
                      parseInt(saving.opening_savings) +
                      parseInt(saving.current_year_savings)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="flexBaX">
                <div className="flexT">
                  <h4>SLF Member Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkB2"
                      onClick={chkb2}
                      className="chkbox"
                      checked={checked1}
                      onChange={(e) => setChecked1(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>

                <div className="flexC">
                  <p>Opening Bank Loans</p>
                  <input
                    required
                    type="number"
                    name="slfm_opening_loan"
                    onChange={inputE}
                    value={slfMemberLoan.slfm_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="slfm_current_year_sanctioned"
                    onChange={inputE}
                    value={slfMemberLoan.slfm_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="slfm_current_year_recovery"
                    onChange={inputE}
                    value={slfMemberLoan.slfm_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="slfm_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(slfMemberLoan.slfm_opening_loan) +
                      parseInt(
                        parseInt(slfMemberLoan.slfm_current_year_sanctioned) -
                          parseInt(slfMemberLoan.slfm_current_year_recovery)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ..............................................................................................................................             */}
          {/* SectionC */}

          <div className="sectionC">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>Bank Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkC1"
                      onClick={chkc1}
                      checked={checked2}
                      onChange={(e) => setChecked2(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>

                <div className="flexC">
                  <p>Opening Bank Loan</p>
                  <input
                    required
                    type="number"
                    name="bank_opening_bank_loan"
                    onChange={inputC}
                    value={bankloan.bank_opening_bank_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="bank_current_year_sanctioned"
                    onChange={inputC}
                    value={bankloan.bank_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="bank_current_year_recovery"
                    onChange={inputC}
                    value={bankloan.bank_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="bank_total_loan_outstanding"
                    value={
                      parseInt(bankloan.bank_opening_bank_loan) +
                      parseInt(
                        parseInt(bankloan.bank_current_year_sanctioned) -
                          parseInt(bankloan.bank_current_year_recovery)
                      )
                    }
                    readOnly
                  />
                </div>
              </div>
              {/* ..................................................................... */}
              <div className="flexBaX">
                <div className="flexT">
                  <h4>Srinidhi Member Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkC2"
                      onClick={chkc2}
                      checked={checked3}
                      onChange={(e) => setChecked3(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>

                <div className="flexC">
                  <p>Opening Loans</p>
                  <input
                    required
                    type="number"
                    name="srim_opening_loan"
                    onChange={inputF}
                    value={srinidhiMemberLoan.srim_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="srim_current_year_sanctioned"
                    onChange={inputF}
                    value={srinidhiMemberLoan.srim_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="srim_current_year_recovery"
                    onChange={inputF}
                    value={srinidhiMemberLoan.srim_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="srim_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(srinidhiMemberLoan.srim_opening_loan) +
                      parseInt(
                        parseInt(
                          srinidhiMemberLoan.srim_current_year_sanctioned
                        ) -
                          parseInt(
                            srinidhiMemberLoan.srim_current_year_recovery
                          )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         */}
          {/* sectionD */}
          <div className="sectionD">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>Covid Loans</h4>

                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkD1"
                      onClick={chkd1}
                      checked={checked4}
                      onChange={(e) => setChecked4(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>

                <div className="flexC">
                  <p>Opening Loans</p>
                  <input
                    required
                    type="number"
                    name="covid_opening_loan"
                    onChange={inputD}
                    value={covidloan.covid_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="covid_current_year_sanctioned"
                    onChange={inputD}
                    value={covidloan.covid_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="covid_current_year_recovery"
                    onChange={inputD}
                    value={covidloan.covid_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="covid_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(covidloan.covid_opening_loan) +
                      parseInt(
                        parseInt(covidloan.covid_current_year_sanctioned) -
                          parseInt(covidloan.covid_current_year_recovery)
                      )
                    }
                  />
                </div>
              </div>
              <div className="flexBaX">
                <div className="flexT">
                  <h4>Internal Member Loan</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkD2"
                      onClick={chkd2}
                      checked={checked5}
                      onChange={(e) => setChecked5(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Loan </p>
                  <input
                    required
                    type="number"
                    name="iml_opening_loan"
                    onChange={inputD_d}
                    value={internalMemberLoan.iml_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="iml_current_year_sanctioned"
                    onChange={inputD_d}
                    value={internalMemberLoan.iml_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="iml_current_year_recovery"
                    onChange={inputD_d}
                    value={internalMemberLoan.iml_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="iml_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(internalMemberLoan.iml_opening_loan) +
                      parseInt(
                        parseInt(
                          internalMemberLoan.iml_current_year_sanctioned
                        ) -
                          parseInt(internalMemberLoan.iml_current_year_recovery)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* sectionE */}
          <div className="sectionE">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>SLF Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkE1"
                      onClick={chke1}
                      checked={checked6}
                      onChange={(e) => setChecked6(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Loans </p>
                  <input
                    required
                    type="number"
                    name="opening_loans"
                    onChange={inputB_b}
                    value={slfloan.opening_loans}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="current_year_sanctioned"
                    onChange={inputB_b}
                    value={slfloan.current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="current_year_recovery"
                    onChange={inputB_b}
                    value={slfloan.current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(slfloan.opening_loans) +
                      parseInt(
                        parseInt(
                          parseInt(slfloan.current_year_sanctioned) -
                            parseInt(slfloan.current_year_recovery)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flexBaX">
                <div className="flexT">
                  <h4>Bank Linkage Member Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkE2"
                      onClick={chke2}
                      checked={checked7}
                      onChange={(e) => setChecked7(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Loan </p>
                  <input
                    required
                    type="number"
                    name="blml_opening_loan"
                    onChange={inputE_e}
                    value={bankLinkageMemberLoan.blml_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="blml_current_year_sanctioned"
                    onChange={inputE_e}
                    value={bankLinkageMemberLoan.blml_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="blml_current_year_recovery"
                    onChange={inputE_e}
                    value={bankLinkageMemberLoan.blml_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="blml_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(bankLinkageMemberLoan.blml_opening_loan) +
                      parseInt(
                        parseInt(
                          bankLinkageMemberLoan.blml_current_year_sanctioned
                        ) -
                          parseInt(
                            bankLinkageMemberLoan.blml_current_year_recovery
                          )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* sectionF */}
          <div className="sectionF">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>Srinidhi Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkF1"
                      onClick={chkf1}
                      checked={checked8}
                      onChange={(e) => setChecked8(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Loan </p>
                  <input
                    required
                    type="number"
                    name="srinidhi_opening_loan"
                    onChange={inputC_c}
                    value={srinidhiLoan.srinidhi_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="srinidhi_current_year_sanctioned"
                    onChange={inputC_c}
                    value={srinidhiLoan.srinidhi_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="srinidhi_current_year_recovery"
                    onChange={inputC_c}
                    value={srinidhiLoan.srinidhi_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="srinidhi_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(srinidhiLoan.srinidhi_opening_loan) +
                      parseInt(
                        parseInt(
                          srinidhiLoan.srinidhi_current_year_sanctioned
                        ) -
                          parseInt(srinidhiLoan.srinidhi_current_year_recovery)
                      )
                    }
                  />
                </div>
              </div>
              <div className="flexBaX">
                <div className="flexT">
                  <h4>Covid Member Loans</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkF2"
                      onClick={chkf2}
                      checked={checked9}
                      onChange={(e) => setChecked9(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>
                <div className="flexC">
                  <p>Opening Loan </p>
                  <input
                    required
                    type="number"
                    name="cml_opening_loan"
                    onChange={inputF_f}
                    value={covidMemberLoans.cml_opening_loan}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Sanctioned</p>
                  <input
                    required
                    type="number"
                    name="cml_current_year_sanctioned"
                    onChange={inputF_f}
                    value={covidMemberLoans.cml_current_year_sanctioned}
                  />
                </div>
                <div className="flexC">
                  <p>Current Year Recovery</p>
                  <input
                    required
                    type="number"
                    name="cml_current_year_recovery"
                    onChange={inputF_f}
                    value={covidMemberLoans.cml_current_year_recovery}
                  />
                </div>
                <div className="flexC">
                  <p>Total Loan Outstanding</p>
                  <input
                    required
                    type="number"
                    name="cml_total_loan_outstanding"
                    readOnly
                    value={
                      parseInt(covidMemberLoans.cml_opening_loan) +
                      parseInt(
                        parseInt(covidMemberLoans.cml_current_year_sanctioned) -
                          parseInt(covidMemberLoans.cml_current_year_recovery)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* sectionG */}
          <div className="sectionG">
            <div className="flexAX">
              <div className="flexBX">
                <div className="flexT">
                  <h4>Balances</h4>
                  <div className="flexD">
                    <input
                      type="checkbox"
                      name="default"
                      id="chkG1"
                      onClick={chkg1}
                      checked={checked10}
                      onChange={(e) => setChecked10(e.target.checked)}
                    />
                    <p>Default Value</p>
                  </div>
                </div>

                <div className="flexC">
                  <p>Opening Bank Balance</p>
                  <input
                    required
                    type="number"
                    name="opening_bank_balance"
                    onChange={inputG}
                    value={openingBankBalance.opening_bank_balance}
                  />
                </div>
                <div className="flexC">
                  <p>Opening Cash in Hand</p>
                  <input
                    required
                    type="number"
                    name="opening_cash"
                    onChange={inputG}
                    value={openingBankBalance.opening_cash}
                  />
                </div>
                <div className="flexC">
                  <p>Closing Bank Balance</p>
                  <input
                    required
                    type="number"
                    name="closing_bank_balance"
                    onChange={inputG}
                    value={openingBankBalance.closing_bank_balance}
                  />
                </div>
              </div>
              <div className="flexBaX">
                <div className="flexC ccin_margin">
                  <p>Closing Cash in Hand</p>
                  <input
                    required
                    type="number"
                    name="closing_cash"
                    onChange={inputG}
                    value={openingBankBalance.closing_cash}
                  />
                </div>
                <div className="flexC">
                  <p>Surplus</p>
                  <input
                    required
                    type="number"
                    name="surplus"
                    onChange={inputG}
                    value={openingBankBalance.surplus}
                  />
                </div>
                <select
                  required
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option selected disabled>
                    year
                  </option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>
            </div>
          </div>
          <div className="endbutton">
            <input
              required
              type="submit"
              value="Submit"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </>
  );
};

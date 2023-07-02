import { createContext, useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const router = useRouter();

  const [results, setResults] = useState({
    heaviestAxisLoad: "",
    roadClass: "",
    payload: "",
  });

  const [totalWeight, setTotalWeight] = useState({
    frontGVW: "",
    rearGVW: "",
    totGVW: "",
  });
  const [emptyWeight, setEmptyWeight] = useState({
    frontEVW: "",
    rearEVW: "",
    totEVW: "",
  });
  const [complementary, setComplementary] = useState({
    length: "",
    width: "",
    height: "",
    wheelbase: "",
    seat: "",
  });

  const handleTotalFront = (event) => {
    setTotalWeight({
      ...totalWeight,
      frontGVW: event.target.value,
      ...(Number(totalWeight.rearGVW) >= 0 && {
        totGVW: Number(event.target.value) + Number(totalWeight.rearGVW),
      }),
    });

    sessionStorage.setItem(
      "totalWeight",
      JSON.stringify({
        ...totalWeight,
        frontGVW: event.target.value,
        ...(Number(totalWeight.rearGVW) >= 0 && {
          totGVW: Number(event.target.value) + Number(totalWeight.rearGVW),
        }),
      })
    );
  };

  const handleTotalRear = (event) => {
    setTotalWeight({
      ...totalWeight,
      rearGVW: event.target.value,
      ...(Number(totalWeight.frontGVW) >= 0 && {
        totGVW: Number(event.target.value) + Number(totalWeight.frontGVW),
      }),
    });

    sessionStorage.setItem(
      "totalWeight",
      JSON.stringify({
        ...totalWeight,
        rearGVW: event.target.value,
        ...(Number(totalWeight.frontGVW) >= 0 && {
          totGVW: Number(event.target.value) + Number(totalWeight.frontGVW),
        }),
      })
    );
  };

  const handleEmptyFront = (event) => {
    setEmptyWeight({
      ...emptyWeight,
      frontEVW: event.target.value,
      ...(Number(emptyWeight.rearEVW) >= 0 && {
        totEVW: Number(event.target.value) + Number(emptyWeight.rearEVW),
      }),
    });

    sessionStorage.setItem(
      "emptyWeight",
      JSON.stringify({
        ...emptyWeight,
        frontEVW: event.target.value,
        ...(Number(emptyWeight.rearEVW) >= 0 && {
          totEVW: Number(event.target.value) + Number(emptyWeight.rearEVW),
        }),
      })
    );
  };

  const handleEmptyRear = (event) => {
    setEmptyWeight({
      ...emptyWeight,
      rearEVW: event.target.value,
      ...(Number(emptyWeight.frontEVW) >= 0 && {
        totEVW: Number(event.target.value) + Number(emptyWeight.frontEVW),
      }),
    });

    sessionStorage.setItem(
      "emptyWeight",
      JSON.stringify({
        ...emptyWeight,
        rearEVW: event.target.value,
        ...(Number(emptyWeight.frontEVW) >= 0 && {
          totEVW: Number(event.target.value) + Number(emptyWeight.frontEVW),
        }),
      })
    );
  };

  const handleComplementary = (event) => {
    setComplementary({
      ...complementary,
      [event.target.name]: event.target.value,
    });

    sessionStorage.setItem(
      "complementary",
      JSON.stringify({
        ...complementary,
        [event.target.name]: event.target.value,
      })
    );
  };

  const calculateResults = () => {
    router.push("/result");
    const seatValue = Number(complementary.seat) * 60;
    const payloadValue =
      Number(totalWeight.totGVW) - (Number(emptyWeight.totEVW) + seatValue);
    const distanceValue =
      (Number(complementary.wheelbase) *
        (Number(totalWeight.rearGVW) - Number(emptyWeight.rearEVW))) /
      (Number(totalWeight.totGVW) - Number(emptyWeight.totEVW));

    const heaviestAxisLoadValue = () => {
      const r1 =         Number(emptyWeight.frontEVW) +
      (Number(payloadValue) *
        (Number(complementary.wheelbase) - Number(distanceValue).toFixed(1))) /
        Number(complementary.wheelbase) +
      Number(seatValue);
      const r2 =           Number(emptyWeight.rearEVW) +
      (Number(payloadValue) * Number(distanceValue).toFixed(1)) /
        Number(complementary.wheelbase);
      if (r1 <= r2) {
        return (
          r2.toFixed(1) + ' S2'
        );
      }
      return (
        r1.toFixed(1) + ' S1'
      );
    };
    const roadClassValue = () => {
      if (heaviestAxisLoadValue() <= 8000 && complementary.length <= 9000) {
        return 3;
      }
      if (heaviestAxisLoadValue() <= 8000 && complementary.length <= 12000) {
        return 2;
      }
      if (heaviestAxisLoadValue() <= 10000 && complementary.length <= 13000) {
        return 1;
      }
    };

    setResults({
      heaviestAxisLoad: heaviestAxisLoadValue(),
      roadClass: roadClassValue(),
      payload: payloadValue.toFixed(1),
    });

    sessionStorage.setItem(
      "results",
      JSON.stringify({
        heaviestAxisLoad: heaviestAxisLoadValue(),
        roadClass: roadClassValue(),
        payload: payloadValue.toFixed(1),
      })
    );
    return;
  };

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("totalWeight"))) {
      setTotalWeight(JSON.parse(sessionStorage.getItem("totalWeight")));
      setComplementary(JSON.parse(sessionStorage.getItem("complementary")));
      setResults(JSON.parse(sessionStorage.getItem("results")));
      setEmptyWeight(JSON.parse(sessionStorage.getItem("emptyWeight")));
    }
  }, []);

  return (
    <ResultContext.Provider
      value={{
        results,
        setResults,
        handleTotalFront,
        handleTotalRear,
        handleEmptyFront,
        handleEmptyRear,
        handleComplementary,
        calculateResults,
        totalWeight,
        emptyWeight,
        complementary,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;

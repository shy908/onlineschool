import React from "react";

const Fees = () => {
  const prePrimaryFee = 500;
  const primaryFee = 600;
  const highSchoolFee = 700;

  const calculateAnnual = (monthlyFee) => monthlyFee * 12;
  const calculateTermly = (monthlyFee) => monthlyFee * 4;
  const calculateDiscountedAnnual = (annualFee) => annualFee - annualFee * 0.05;

  return (
    <div className="w-full max-w-3xl mx-auto font-sans text-gray-800 p-4">
      {/* Fees Overview Section */}
      <div className="mb-6 text-start md:text-center">
        <h2 className="text-4xl md:text-5xl mt-6 text-[#1f5256] font-bold mb-4">
          Fees Overview
        </h2>
        <p className="text-gray-600">
          All our school formats come with transparent fee structures to suit
          different needs and budgets.
        </p>
      </div>

      {/* Fee Sections */}
      {[
        { level: "Pre-primary", fee: prePrimaryFee },
        { level: "Primary (Grade 1 to 7)", fee: primaryFee },
        { level: "High School (Form 1 to 6)", fee: highSchoolFee },
      ].map(({ level, fee }, index) => (
        <div key={index} className="mb-10">
          <p className="text-[#1f5256] text-2xl md:text-3xl text-center font-medium mt-8 mb-8 bg-slate-300 p-4 rounded-lg">
            {level}
          </p>

          {/* Fee Table */}
          <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-200 p-6 text-center">
              <p className="text-xl">Live online classes</p>
            </div>
            <div className="p-6 divide-y divide-gray-300">
              <div className="py-4 flex justify-between items-center">
                <p className="text-lg">Monthly</p>
                <div className="text-right">
                  <p className="font-semibold text-xl">R{fee}</p>
                  <p className="text-sm text-gray-500">12 installments</p>
                  <p className="text-sm text-gray-500">
                    Total: R{calculateAnnual(fee)}
                  </p>
                </div>
              </div>
              <div className="py-4 flex justify-between items-center">
                <p className="text-lg">Termly</p>
                <div className="text-right">
                  <p className="font-semibold text-xl">R{calculateTermly(fee)}</p>
                  <p className="text-sm text-gray-500">4 installments</p>
                  <p className="text-sm text-gray-500">
                    Total: R{calculateTermly(fee)}
                  </p>
                </div>
              </div>
              <div className="py-4 flex justify-between items-center">
                <p className="text-lg">Annual once-off payment</p>
                <div className="text-right">
                  <p className="font-semibold text-xl">
                    R{calculateDiscountedAnnual(calculateAnnual(fee))}
                  </p>
                  <p className="text-sm text-green-600">
                    Save R{calculateAnnual(fee) * 0.05}
                  </p>
                  <p className="text-sm text-gray-500">
                    Original: R{calculateAnnual(fee)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 text-sm">
              <p className="mb-2">
                <strong>5% discount</strong> when you pay the annual fees
                upfront.
              </p>
              <p>
                <strong>5% sibling discount</strong> will be applied to school
                fees of the second and any subsequent siblings.
              </p>
              {/* Added Information */}
              {level === "High School (Form 1 to 6)" && (
                <p className="mt-4 text-sm">
                  <strong>Note:</strong> If you are taking 3 or fewer subjects, the fee is reduced to R500 per month.
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fees;

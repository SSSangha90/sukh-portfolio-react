import React, { useState, useCallback } from "react";

const InvestmentCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [annualSaving, setAnnualSaving] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleInitialAmount = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setInitialAmount(Number(event.currentTarget.value));
    },
    []
  );

  const handleAnnualSaving = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setAnnualSaving(Number(event.currentTarget.value));
    },
    []
  );

  const handleInterest = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setInterest(Number(event.currentTarget.value));
    },
    []
  );

  const handleDuration = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setDuration(Number(event.currentTarget.value));
    },
    []
  );

  return (
    <div>
      <div>
        <div>
          <label>Initial Amount</label>
          <input
            type="number"
            min={0}
            value={initialAmount}
            onChange={handleInitialAmount}
          />
        </div>
        <div>
          <label>Annual Contribution</label>
          <input
            type="number"
            min={0}
            value={annualSaving}
            onChange={handleAnnualSaving}
          />
        </div>
        <div>
          <label>Expected Interest (% per year)</label>
          <input
            type="number"
            min={0}
            value={interest}
            onChange={handleInterest}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            min={0}
            value={duration}
            onChange={handleDuration}
          />
        </div>
      </div>
      <div>
        <button />
        <button />
      </div>
    </div>
  );
};

export default InvestmentCalculator;

import React, { useState } from 'react';

const ChildForm = () => {
  const [childId, setChildId] = useState('');
  const [childName, setChildName] = useState('');
  const [joiningAge, setJoiningAge] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [gender, setGender] = useState('');
  const [level, setLevel] = useState('');
  const [classValue, setClassValue] = useState('');
  const [disability, setDisability] = useState('');
  const [severity, setSeverity] = useState('');
  const [dob, setDob] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [relativeContact, setRelativeContact] = useState('');
  const [baselineConsolidated, setBaselineConsolidated] = useState('');
  const [endlineConsolidated, setEndlineConsolidated] = useState('');
  const [twoWords, setTwoWords] = useState('');
  const [vocabulary, setVocabulary] = useState('');
  const [traditionalAndModernGame, setTraditionalAndModernGame] = useState('');
  const [mumbaiMapTopography, setMumbaiMapTopography] = useState('');
  const [lemonSherbatMaking, setLemonSherbatMaking] = useState('');
  const [stampingTheDesign, setStampingTheDesign] = useState('');
  const [fraction, setFraction] = useState('');
  const [arithmetic, setArithmetic] = useState('');
  const [baselinePercentage, setBaselinePercentage] = useState('');
  const [endlinePercentage, setEndlinePercentage] = useState('');
  const [status, setStatus] = useState('');

  const handleBaselinePercentageChange = (e) => {
    const inputPercentage = e.target.value;
    
    if (inputPercentage >= 0 && inputPercentage <= 100) {
      setBaselinePercentage(inputPercentage);
    }
  };

  const handleEndlinePercentageChange = (e) => {
    const newPercentage = parseInt(e.target.value);
    if (newPercentage >= 0 && newPercentage <= 100) {
      setEndlinePercentage(newPercentage);
    } else {
      setEndlinePercentage('')
      setStatus('')
    }
    
    if (newPercentage >= 80) {
      setStatus('Pass');
    } 
    if (newPercentage < 80) {
      setStatus('Fail');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: this whole thing messed up
    const studentData = {
      child_name: childName,
      joining_age: joiningAge,
      current_age: currentAge,
      gender: gender,
      level: level,
      "class": classValue,
      disability: disability,
      severity: severity,
      DOB: dob,
      aadhar_number: aadharNumber,
      address: address,
      phone: phone,
      relative_contact: relativeContact,
      STANDARD_AT_NON_SPECIAL_SCHOOL: standardAtNonSpecialSchool,
      BASELINE_CONSOLIDATED: baselineConsolidated,
      ENDLINE_CONSOLIDATED: endlineConsolidated,
      two_words: twoWords,
      vocabulary: vocabulary,
      TRADITIONAL_AND_MODERN_GAME: traditionalAndModernGame,
      MUMBAI_MAP_TOPOGRAPHY: mumbaiMapTopography,
      LEMON_SHERRBAT_MAKING: lemonSherbatMaking,
      STAMPING_THE_DESIGN: stampingTheDesign,
      fraction: fraction,
      ARITHMETIC: arithmetic,
      BASELINE_PERCENTAGE: baselinePercentage,
      ENDLINE_PERCENTAGE: endlinePercentage,
      status: status
    };

    console.log('Form submitted:', {
      childId,
      childName,
      joiningAge,
      currentAge,
      gender,
      level,
      classValue,
      disability,
      severity,
      dob,
      aadharNumber,
      address,
      phone,
      relativeContact,
      baselineConsolidated,
      endlineConsolidated,
      twoWords,
      vocabulary,
      traditionalAndModernGame,
      mumbaiMapTopography,
      lemonSherbatMaking,
      stampingTheDesign,
      fraction,
      arithmetic,
      baselinePercentage,
      endlinePercentage,
      status,
    });
  };

  return (
    <div>
    <h1 className='text-3xl my-8'>Student entry form</h1>
    <form  className='text-black text-left px-8 grid grid-cols-2' onSubmit={handleSubmit}>
    <div className='py-4 text-black'>
        <label className='pr-8'>
          Child ID:
        </label>
          <input className='text-black border-2'
            type="text"
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
            required
          />
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8'>
          Child Name:
        </label>
          <input className='text-black border-2'
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8' htmlFor="currentAge">Current Age:</label>
        <select
          id="currentAge"
          className='text-black border-2'
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
          required
        >
          <option value="">Select Age</option>
          {Array.from({ length: 14 }, (_, index) => index + 5).map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8' htmlFor="joiningAge">Joining Age:</label>
        <select
          id="joiningAge"
          className='text-black border-2'
          value={joiningAge}
          onChange={(e) => setJoiningAge(Array.from(e.target.selectedOptions, option => option.value))}
          required
        >
          <option value="">Select Age</option>
          {Array.from({ length: 14 }, (_, index) => index + 5).map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8' htmlFor="gender">Gender:</label>
        <select
          id="gender"
          className='text-black border-2'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8'>
          Level:
        </label>
          <select
            id="level"
            className='text-black border-2'
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="">Select Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8'>
          Disability:
        </label>
          <select
            id="disability"
            className='text-black border-2'
            value={disability}
            onChange={(e) => setDisability(e.target.value)}
            required
          >
              <option value="">Select Disability</option>
              <option value="adhd">ADHD</option>
              <option value="downs">Down's Syndrome</option>
              <option value="palsy">Cerebral Palsy</option>
              <option value="autism">Autism</option>
          </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8' htmlFor="severity">Severity:</label>
        <select
          id="severity"
          className='text-black border-2'
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          required
        >
          <option value="">Select Severity</option>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8'>
          Date of Birth (DOB):
        </label>
          <input className='text-black border-2'
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
      </div>
      <div className='py-4 text-black'>
        <label className='pr-8'>
          Aadhar Number:
        </label>
          <input className='text-black border-2'
            type="number"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            required
          />
      </div>
      <div className='py-4 text-black'>
        <label>
          Address:
          <input className='text-black border-2'
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Phone:
          <input className='text-black border-2'
            type="text"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Relative Contact:
          <input className='text-black border-2'
            type="text"
            pattern="[0-9]{10}"
            value={relativeContact}
            onChange={(e) => setRelativeContact(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Baseline Consolidated:
          <input className='text-black border-2'
            type="text"
            value={baselineConsolidated}
            onChange={(e) => setBaselineConsolidated(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Endline Consolidated:
          <input className='text-black border-2'
            type="text"
            value={endlineConsolidated}
            onChange={(e) => setEndlineConsolidated(e.target.value)}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Two Words:
        <select className='text-black border-2'
          value={twoWords}
          onChange={(e) => setTwoWords(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Y">Y</option>
          <option value="N">N</option>
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Vocabulary:
        <select className='text-black border-2'
          value={vocabulary}
          onChange={(e) => setVocabulary(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Traditional and Modern Game:
        <select className='text-black border-2'
          value={traditionalAndModernGame}
          onChange={(e) => setTraditionalAndModernGame(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Mumbai Map Topography:
        <select className='text-black border-2'
          value={mumbaiMapTopography}
          onChange={(e) => setMumbaiMapTopography(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Lemon Sherbat Making:
        <select className='text-black border-2'
          value={lemonSherbatMaking}
          onChange={(e) => setLemonSherbatMaking(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Stamping the Design:
        <select className='text-black border-2'
          value={stampingTheDesign}
          onChange={(e) => setStampingTheDesign(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Fraction:
        <select className='text-black border-2'
          value={fraction}
          onChange={(e) => setFraction(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
      <label>
        Arithmetic:
        <select className='text-black border-2'
          value={arithmetic}
          onChange={(e) => setArithmetic(e.target.value)}
          required
        >
          <option value="">Select</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>
      </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Baseline Percentage:
          <input className='text-black border-2'
            type="number"
            value={baselinePercentage}
            onChange={handleBaselinePercentageChange}
            placeholder='No need to add % sign'
            size={30}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Endline Percentage:
          <input className='text-black border-2'
            type="number"
            value={endlinePercentage}
            onChange={handleEndlinePercentageChange}
            placeholder='No need to add % sign'
            size={30}
            required
          />
        </label>
      </div>
      <div className='py-4 text-black'>
        <label>
          Status:
          <input className='text-black border-2'
            type="text"
            value={status}
            readOnly          
          />
        </label>
      </div>
      <div className='text-center w-full col-span-2 my-8'>
        <button className='p-2 text-white bg-primary hover:bg-[#ADD8E6] rounded-xl transition w-1/12' type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default ChildForm;
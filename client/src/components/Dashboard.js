import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useSpring, animated } from 'react-spring';

const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 60 },
  { label: 'C', value: 90 },
];

const BarChart = () => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(data);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const chartOptions = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: animatedData.map(({ label }) => label),
    },
  };

  const chartSeries = [
    {
      name: 'Value',
      data: animatedData.map(({ value }) => value),
    },
  ];

  const barProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <div>
      <h2>Bar Chart</h2>
      <animated.div style={barProps}>
        <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
      </animated.div>
    </div>
  );
};


const PieChart = () => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(data);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const chartOptions = {
    chart: {
      id: 'pie-chart',
    },
    labels: animatedData.map(({ label }) => label),
  };

  const chartSeries = animatedData.map(({ value }) => value);

  const pieProps = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  return (
    <div>
      <h2>Pie Chart</h2>
      <animated.div style={pieProps}>
        <Chart options={chartOptions} series={chartSeries} type="pie" height={350} />
      </animated.div>
    </div>
  );
};

const LineChart = () => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(data);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const chartOptions = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: animatedData.map(({ label }) => label),
    },
  };

  const chartSeries = [
    {
      name: 'Value',
      data: animatedData.map(({ value }) => value),
    },
  ];

  const lineProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <div>
      <h2>Line Chart</h2>
      <animated.div style={lineProps}>
        <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
      </animated.div>
    </div>
  );
};

const DoughnutChart = () => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(data);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const chartOptions = {
    chart: {
      id: 'doughnut-chart',
    },
    labels: animatedData.map(({ label }) => label),
  };

  const chartSeries = animatedData.map(({ value }) => value);

  const doughnutProps = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  return (
    <div>
      <h2>Doughnut Chart</h2>
      <animated.div style={doughnutProps}>
        <Chart options={chartOptions} series={chartSeries} type="donut" height={350} />
      </animated.div>
    </div>
  );
};

function Dashboard() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Animated Visualization</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <BarChart />
        </div>
        <div style={{ marginRight: '20px' }}>
          <PieChart />
        </div>
        <div style={{ marginRight: '20px' }}>
          <LineChart />
        </div>
        <div style={{ marginRight: '20px' }}>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
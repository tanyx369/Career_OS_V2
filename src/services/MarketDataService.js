// User's static profile strength remains tied to their profile.
const USER_STRONG_AREAS = ['SQL', 'Excel', 'Communication'];

export class MarketDataService {
  static getMarketStanding(country, timeframe) {
    // 1. Currency & Salaries
    let currency = 'RM';
    let averageSalary = 68000;
    let p25Multiplier = 0.7;
    let p75Multiplier = 1.4;

    switch (country) {
      case 'Singapore':
        currency = 'SGD';
        averageSalary = 72000;
        break;
      case 'Indonesia':
        currency = 'IDR';
        averageSalary = 150000000;
        break;
      case 'Thailand':
        currency = 'THB';
        averageSalary = 480000;
        break;
      case 'Vietnam':
        currency = 'VND';
        averageSalary = 320000000;
        break;
      case 'Philippines':
        currency = 'PHP';
        averageSalary = 540000;
        break;
      case 'Australia':
        currency = 'AUD';
        averageSalary = 88000;
        break;
      case 'United Kingdom':
        currency = '£'; // Use symbol directly for GBP
        averageSalary = 55000;
        break;
      case 'United States':
        currency = '$'; // Use symbol
        averageSalary = 95000;
        break;
      case 'Canada':
        currency = 'CAD';
        averageSalary = 78000;
        break;
      default: // Malaysia
        currency = 'RM';
        averageSalary = 68000;
        break;
    }

    const formatSalary = (val) => {
      if (val >= 1000000) {
        return `${(val / 1000000).toFixed(0)}M`;
      }
      return `${(val / 1000).toFixed(0)}K`;
    };

    const salaryPrefix = currency === '$' || currency === '£' ? currency : `${currency} `;
    
    const salaryBenchmark = {
      average: `${salaryPrefix}${averageSalary.toLocaleString()}`,
      role: 'Data Analyst',
      location: country,
      p25: `${salaryPrefix}${formatSalary(averageSalary * p25Multiplier)}`,
      median: `${salaryPrefix}${formatSalary(averageSalary)}`,
      p75: `${salaryPrefix}${formatSalary(averageSalary * p75Multiplier)}`,
    };

    // 2. Market Position Score by Country
    let marketPositionScore = 72;
    switch (country) {
      case 'Singapore': marketPositionScore = 58; break;
      case 'United States': marketPositionScore = 65; break;
      case 'Australia': marketPositionScore = 60; break;
      case 'United Kingdom': marketPositionScore = 62; break;
      case 'Canada': marketPositionScore = 64; break;
      case 'Indonesia': marketPositionScore = 75; break;
      case 'Thailand': marketPositionScore = 70; break;
      case 'Vietnam': marketPositionScore = 68; break;
      case 'Philippines': marketPositionScore = 73; break;
      default: marketPositionScore = 72; // Malaysia
    }

    // 3. Top In-Demand Skills & Gaps
    let inDemandSkills = [];
    let improvementAreas = [];
    let aiInsight = '';

    if (country === 'Singapore') {
      inDemandSkills = [
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Cloud Computing', demand: 'High', strength: 'Low', strengthValue: 20 },
        { skill: 'Machine Learning', demand: 'High', strength: 'Low', strengthValue: 28 },
        { skill: 'Tableau', demand: 'Medium', strength: 'Medium', strengthValue: 58 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
      ];
      improvementAreas = ['Cloud Computing', 'Machine Learning', 'Tableau'];
      aiInsight = 'Learning Cloud and Machine Learning skills could improve your market position in Singapore by 18 points.';
    } else if (country === 'United States') {
      inDemandSkills = [
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'AWS', demand: 'High', strength: 'Low', strengthValue: 15 },
        { skill: 'Machine Learning', demand: 'High', strength: 'Low', strengthValue: 28 },
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Data Engineering', demand: 'High', strength: 'Low', strengthValue: 25 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
      ];
      improvementAreas = ['AWS', 'Data Engineering', 'Machine Learning'];
      aiInsight = 'Demand for Data Engineering skills in the United States has increased significantly. Consider building projects using AWS and Python.';
    } else if (country === 'Australia') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'Tableau', demand: 'High', strength: 'Medium', strengthValue: 58 },
        { skill: 'Power BI', demand: 'High', strength: 'Medium', strengthValue: 48 },
        { skill: 'Data Governance', demand: 'Medium', strength: 'Low', strengthValue: 18 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
      ];
      improvementAreas = ['Data Governance', 'Statistics', 'Power BI'];
      aiInsight = 'Australian employers value data governance and compliance alongside visualization. Adding data governance concepts will give you an edge.';
    } else if (country === 'United Kingdom') {
      inDemandSkills = [
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Power BI', demand: 'High', strength: 'Medium', strengthValue: 58 },
        { skill: 'Excel', demand: 'Medium', strength: 'Strong', strengthValue: 84 },
        { skill: 'Tableau', demand: 'Medium', strength: 'Medium', strengthValue: 45 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
      ];
      improvementAreas = ['Python', 'Tableau', 'Statistics'];
      aiInsight = 'London and UK tech hubs are seeking python-skilled analysts. Work on Python scripts that automate data extraction.';
    } else if (country === 'Indonesia') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Excel', demand: 'High', strength: 'Strong', strengthValue: 84 },
        { skill: 'Python', demand: 'Medium', strength: 'Medium', strengthValue: 55 },
        { skill: 'Tableau', demand: 'Medium', strength: 'Medium', strengthValue: 45 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
        { skill: 'Data Warehousing', demand: 'Medium', strength: 'Low', strengthValue: 20 },
      ];
      improvementAreas = ['Python', 'Tableau', 'Data Warehousing'];
      aiInsight = 'Strengthen your Python data analysis and Tableau reporting skills to access higher tier roles in Indonesia.';
    } else if (country === 'Thailand') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Excel', demand: 'High', strength: 'Strong', strengthValue: 84 },
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'Power BI', demand: 'Medium', strength: 'Medium', strengthValue: 58 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
        { skill: 'Communication', demand: 'Medium', strength: 'Strong', strengthValue: 90 },
      ];
      improvementAreas = ['Power BI', 'Python', 'Statistics'];
      aiInsight = 'Mastering Power BI and Statistics is key for local analyst roles in Thailand. Focus on end-to-end data dashboards.';
    } else if (country === 'Vietnam') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'Excel', demand: 'Medium', strength: 'Strong', strengthValue: 84 },
        { skill: 'Power BI', demand: 'Medium', strength: 'Medium', strengthValue: 58 },
        { skill: 'Data Visualization', demand: 'Medium', strength: 'Medium', strengthValue: 48 },
        { skill: 'English', demand: 'Medium', strength: 'Strong', strengthValue: 80 },
      ];
      improvementAreas = ['Python', 'Power BI', 'Data Visualization'];
      aiInsight = 'Hiring for data positions in Vietnam is growing. Adding advanced Power BI and data model capabilities will boost your profile.';
    } else if (country === 'Philippines') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Excel', demand: 'High', strength: 'Strong', strengthValue: 84 },
        { skill: 'Python', demand: 'Medium', strength: 'Medium', strengthValue: 55 },
        { skill: 'Tableau', demand: 'Medium', strength: 'Medium', strengthValue: 58 },
        { skill: 'Power BI', demand: 'Medium', strength: 'Medium', strengthValue: 48 },
        { skill: 'Business Intelligence', demand: 'Medium', strength: 'Low', strengthValue: 28 },
      ];
      improvementAreas = ['Python', 'Tableau', 'Business Intelligence'];
      aiInsight = 'The BPO and tech sectors in the Philippines favor hybrid SQL + Tableau analysts. Level up your BI pipeline experience.';
    } else if (country === 'Canada') {
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'Power BI', demand: 'High', strength: 'Medium', strengthValue: 58 },
        { skill: 'Excel', demand: 'Medium', strength: 'Strong', strengthValue: 84 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
        { skill: 'Machine Learning', demand: 'Medium', strength: 'Low', strengthValue: 28 },
      ];
      improvementAreas = ['Python', 'Statistics', 'Machine Learning'];
      aiInsight = 'Canadian tech market requires strong foundational statistics. Consider doing case study projects demonstrating business analytics.';
    } else { // Malaysia
      inDemandSkills = [
        { skill: 'SQL', demand: 'High', strength: 'Strong', strengthValue: 88 },
        { skill: 'Data Visualization (Power BI)', demand: 'High', strength: 'Medium', strengthValue: 58 },
        { skill: 'Python', demand: 'High', strength: 'Medium', strengthValue: 55 },
        { skill: 'Excel', demand: 'Medium', strength: 'Strong', strengthValue: 84 },
        { skill: 'Statistics', demand: 'Medium', strength: 'Low', strengthValue: 32 },
        { skill: 'Machine Learning', demand: 'Medium', strength: 'Low', strengthValue: 28 },
      ];
      improvementAreas = ['Statistics', 'Python', 'Machine Learning'];
      aiInsight = 'Improve your Data Visualization and Statistics skills to move into the top 50% of Data Analysts.';
    }

    // 4. Growth calculations & Trend Line Points by Timeframe
    let growthRate = 18;
    let growthDirection = 'growing';
    
    // Scale growth rate based on country + timeframe
    const baseRates = {
      Malaysia: 18,
      Singapore: 24,
      'United States': 12,
      Indonesia: 15,
      Thailand: 14,
      Vietnam: 20,
      Philippines: 16,
      Australia: 10,
      'United Kingdom': 8,
      Canada: 11,
    };

    const rate = baseRates[country] || 15;

    let timeMonths = 12;
    let growthText = '';
    
    switch (timeframe) {
      case 'Past 3 Months':
        timeMonths = 3;
        growthRate = Math.round(rate * 0.25);
        growthDirection = 'stabilizing';
        growthText = `growing ${growthRate}% in the past quarter`;
        break;
      case 'Past 6 Months':
        timeMonths = 6;
        growthRate = Math.round(rate * 0.5);
        growthDirection = 'increasing';
        growthText = `up by ${growthRate}% over the past 6 months`;
        break;
      case 'Past 12 Months':
        timeMonths = 12;
        growthRate = rate;
        growthDirection = 'growing';
        growthText = `growing ${growthRate}% in the past year`;
        break;
      case 'Past 24 Months':
        timeMonths = 12; // Render 12 bi-monthly points
        growthRate = Math.round(rate * 1.8);
        growthDirection = 'expanding';
        growthText = `growing ${growthRate}% in the past 2 years`;
        break;
      case 'Past 5 Years':
        timeMonths = 10; // Render 10 bi-annual points
        growthRate = Math.round(rate * 4.5);
        growthDirection = 'surging';
        growthText = `surging ${growthRate}% in the past 5 years`;
        break;
    }

    // Generate monthly labels and trend points
    const trendData = [];
    const baselineDemand = 50 + (marketPositionScore - 60) * 0.5;

    if (timeframe === 'Past 3 Months') {
      const months = ['Mar 2026', 'Apr 2026', 'May 2026'];
      const demands = [baselineDemand - 4, baselineDemand - 1, baselineDemand + 2];
      const strengths = [55, 58, 60];
      for (let i = 0; i < 3; i++) {
        trendData.push({ month: months[i], marketDemand: demands[i], yourStrength: strengths[i] });
      }
    } else if (timeframe === 'Past 6 Months') {
      const months = ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026'];
      const demands = [baselineDemand - 8, baselineDemand - 4, baselineDemand - 6, baselineDemand - 2, baselineDemand, baselineDemand + 2];
      const strengths = [50, 52, 53, 56, 58, 60];
      for (let i = 0; i < 6; i++) {
        trendData.push({ month: months[i], marketDemand: demands[i], yourStrength: strengths[i] });
      }
    } else if (timeframe === 'Past 12 Months') {
      const months = ['Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026'];
      const demands = [baselineDemand - 15, baselineDemand - 15, baselineDemand - 10, baselineDemand - 5, baselineDemand - 7, baselineDemand + 2, baselineDemand - 1, baselineDemand + 4, baselineDemand - 1, baselineDemand + 6, baselineDemand + 5, baselineDemand + 8];
      const strengths = [38, 43, 37, 47, 42, 42, 54, 47, 48, 58, 55, 60];
      for (let i = 0; i < 12; i++) {
        trendData.push({ month: months[i], marketDemand: demands[i], yourStrength: strengths[i] });
      }
    } else if (timeframe === 'Past 24 Months') {
      const months = ['Jun 2024', 'Aug 2024', 'Oct 2024', 'Dec 2024', 'Feb 2025', 'Apr 2025', 'Jun 2025', 'Aug 2025', 'Oct 2025', 'Dec 2025', 'Feb 2026', 'May 2026'];
      const demands = [baselineDemand - 22, baselineDemand - 18, baselineDemand - 14, baselineDemand - 10, baselineDemand - 8, baselineDemand - 5, baselineDemand - 3, baselineDemand, baselineDemand + 2, baselineDemand + 5, baselineDemand + 7, baselineDemand + 10];
      const strengths = [30, 33, 36, 40, 42, 45, 48, 50, 52, 55, 58, 60];
      for (let i = 0; i < 12; i++) {
        trendData.push({ month: months[i], marketDemand: demands[i], yourStrength: strengths[i] });
      }
    } else if (timeframe === 'Past 5 Years') {
      const months = ['Jun 2021', 'Dec 2021', 'Jun 2022', 'Dec 2022', 'Jun 2023', 'Dec 2023', 'Jun 2024', 'Dec 2024', 'Jun 2025', 'May 2026'];
      const demands = [baselineDemand - 40, baselineDemand - 35, baselineDemand - 30, baselineDemand - 24, baselineDemand - 18, baselineDemand - 12, baselineDemand - 6, baselineDemand, baselineDemand + 5, baselineDemand + 12];
      const strengths = [20, 24, 28, 32, 36, 40, 44, 48, 52, 60];
      for (let i = 0; i < 10; i++) {
        trendData.push({ month: months[i], marketDemand: demands[i], yourStrength: strengths[i] });
      }
    }

    const demandGrowthText = `Overall demand for Data Analyst skills is ${growthDirection} and ${growthText}.`;

    return {
      location: country,
      timeRange: timeframe,
      marketPositionScore,
      salaryBenchmark,
      inDemandSkills,
      trendData,
      strongAreas: USER_STRONG_AREAS,
      improvementAreas,
      aiInsight,
      demandGrowthText,
    };
  }
}

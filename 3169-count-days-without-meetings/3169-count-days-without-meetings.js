/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
const countDays = function(days, meetings) {
  const mergeMeetingTimes = [];
  meetings.sort(([start1, end1], [start2, end2]) => {
    return start1 - start2;
  });
  
  for (const meeting of meetings) {
    const [start, end] = meeting;
    
    if (!mergeMeetingTimes.length) {
      mergeMeetingTimes.push(meeting);
    }
    
    for (let i = 0; i < mergeMeetingTimes.length; i++) {
      const mergeMeetingTime = mergeMeetingTimes[i];
      const [startTime, endTime] = mergeMeetingTime;
      
      if (start <= endTime) {
        if (end >= endTime) {
          mergeMeetingTime[1] = end;
        }
        
        break;
      }
      
      if (i === mergeMeetingTimes.length - 1) {
        mergeMeetingTimes.push(meeting);
      }
    }
  }
  
  mergeMeetingTimes.forEach(([start, end]) => {
    days -= (end - start + 1);
  });
  
  return days;
};
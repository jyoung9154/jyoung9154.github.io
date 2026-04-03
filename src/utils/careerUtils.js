/**
 * 경력 기간 기반 자동 연차 계산 유틸리티
 * periods: 실제 근무 기간 배열
 */
const CAREER_PERIODS = [
    { start: new Date(2018, 8, 1), end: new Date(2022, 5, 30) },  // 2018.09 ~ 2022.06
    { start: new Date(2024, 6, 1), end: null },                    // 2024.07 ~ Now
];

export function getCareerTotalMonths() {
    let totalMonths = 0;
    CAREER_PERIODS.forEach(({ start, end }) => {
        const endDate = end || new Date();
        totalMonths +=
            (endDate.getFullYear() - start.getFullYear()) * 12 +
            (endDate.getMonth() - start.getMonth());
    });
    return totalMonths;
}

export function getCareerYearLabel() {
    const totalMonths = getCareerTotalMonths();
    const year = Math.floor(totalMonths / 12) + 1;
    return `${year}년차`;
}


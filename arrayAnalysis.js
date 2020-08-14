const analyze = (arr) => {
    let analysis = {
        average: (arr.reduce((a, b) => { return a + b }) / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
    return analysis;
}

// console.log(analyze([12344, 54678, 12345, 87945, 78923, 55677, 3456, 6789]));

export default analyze;
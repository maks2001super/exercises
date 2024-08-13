let exercises = "Squat";

switch (exercises) {
    case "Dumbbell curl":
    case "Tricep extensions":
    case "Push up":
        console.log("10-15 reps");
        break;

    case "Dumbell shoulders press":
        console.log("15-20 reps");
        break;

    case "Squat":
        console.log("8-12 reps");
        break;

    default:
        console.log("error");
}

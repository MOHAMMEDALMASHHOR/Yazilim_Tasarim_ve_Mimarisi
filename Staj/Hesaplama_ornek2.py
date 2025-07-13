# Define the tables as dictionaries
education_outcomes = {
    "Ö1": [1, 2, 5, 1, 0, 3, 0, 0, 0, 2, 3, 1],
    "Ö2": [0, 4, 0, 2, 0, 3, 0, 0, 3, 0, 0, 0],
    "Ö3": [3, 0, 0, 3, 4, 0, 0, 0, 0, 3, 3, 3]
}

exam_contributions = {
    "Vize S1": [0, 1, 1, 0, 0, 0, 1],
    "Vize S2": [1, 1, 0, 1, 1, 0, 0],
    "Vize S3": [1, 1, 1, 0, 1, 0, 1]
}

student_scores = {
    "İsmayil Can": {
        "ÖĞ.NO": 11111,
        "Vize S1": 23,
        "Vize S2": 33,
        "Vize S3": 22,
        "Final F1": 14,
        "Final F2": 0,
        "Final F3": 5,
        "Final F4": 18
    }
}

max_scores = {
    "Vize S1": 35,
    "Vize S2": 35,
    "Vize S3": 30,
    "Final F1": 25,
    "Final F2": 25,
    "Final F3": 25,
    "Final F4": 25
}

def calculate_education_outcomes(student_scores, max_scores, exam_contributions):
    education_outcomes_results = {}
    for key, scores in exam_contributions.items():
        result = 0
        for i, contribution in enumerate(scores):
            if contribution > 0:
                result += student_scores[key] / max_scores[key]
        education_outcomes_results[key] = result * contribution
    return education_outcomes_results

def calculate_program_outcomes(education_outcomes, education_outcomes_results):
    program_outcomes_results = {}
    for i in range(1, 13):
        program_outcomes_results[f"P{i}"] = (
            education_outcomes_results["Ö1"] + 
            education_outcomes_results["Ö2"] + 
            education_outcomes_results["Ö3"]
        ) / (
            education_outcomes["Ö1"][i-1] + 
            education_outcomes["Ö2"][i-1] + 
            education_outcomes["Ö3"][i-1]
        )
    return program_outcomes_results

def convert_scores_to_ratings(scores):
    ratings = {}
    for key, score in scores.items():
        if score < 0.2:
            ratings[key] = 1
        elif score < 0.4:
            ratings[key] = 2
        elif score < 0.6:
            ratings[key] = 3
        elif score < 0.8:
            ratings[key] = 4
        else:
            ratings[key] = 5
    return ratings

education_outcomes_results = calculate_education_outcomes(student_scores["İsmayil Can"], max_scores, exam_contributions)
program_outcomes_results = calculate_program_outcomes(education_outcomes, education_outcomes_results)
ratings = convert_scores_to_ratings(program_outcomes_results)

print(ratings)

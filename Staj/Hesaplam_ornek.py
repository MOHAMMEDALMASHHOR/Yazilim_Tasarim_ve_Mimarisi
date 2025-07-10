def calculate_grades(vize_scores, final_score, odev_score, vize_weight, final_weight, odev_weight):
    vize_avg = sum(vize_scores) / len(vize_scores)
    vize_contrib = (vize_avg / 5) * vize_weight
    final_contrib = (final_score / 5) * final_weight
    odev_contrib = (odev_score / 5) * odev_weight
    total_grade = vize_contrib + final_contrib + odev_contrib
    return total_grade

def calculate_p1_p2_contrib(scores, questions_contrib):
    p_contribs = [score / 5 * contrib for score, contrib in zip(scores, questions_contrib)]
    p_total = sum(p_contribs) / len(p_contribs)
    return p_total

# Matematik Notu Hesaplama
matematik_vize_scores = [4, 3, 2, 3, 4]
matematik_final_score = 80
matematik_odev_score = 18
matematik_grade = calculate_grades(matematik_vize_scores, matematik_final_score, matematik_odev_score, 0.3, 0.6, 0.1)
print("Matematik Notu:", matematik_grade)

# P1 Katkısı Hesaplama
matematik_q_scores = [2, 3]
matematik_q_contrib = [0.5, 0.5]
p1_contrib_matematik = calculate_p1_p2_contrib(matematik_q_scores, matematik_q_contrib)

fizik_q_scores = [15, 40]
fizik_q_contrib = [0.75, 0.8]
p1_contrib_fizik = calculate_p1_p2_contrib(fizik_q_scores, fizik_q_contrib)

p1_total = (p1_contrib_matematik + p1_contrib_fizik) / 2
print("P1 Toplam Katkı:", p1_total)

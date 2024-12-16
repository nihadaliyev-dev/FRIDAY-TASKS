import math
def factorial(n):
    """Faktorial hesablayan funksiya."""
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)
def bessel_interpolation(x_values, y_values, x):
    """
    Bessel interpolyasiya düsturunu tətbiq edir.

    x_values: Verilmiş nöqtələr (x oxu üzrə)
    y_values: Verilmiş nöqtələrdəki funksiyanın dəyərləri (y oxu üzrə)
    x: Hesablanacaq nöqtə
    """
    n = len(x_values)
    h = x_values[1] - x_values[0]  # Nöqtələr arasındakı məsafə
    s = (x - (x_values[n // 2] + x_values[n // 2 - 1]) / 2) / h  # Qaussun simmetrik əmsalı
    # Fərqlər cədvəli
    diff_table = [y_values]
    for i in range(1, n):
        diffs = [diff_table[i - 1][j + 1] - diff_table[i - 1][j] for j in range(len(diff_table[i - 1]) - 1)]
        diff_table.append(diffs)
    # Bessel interpolyasiya düsturu
    result = (diff_table[0][n // 2 - 1] + diff_table[0][n // 2]) / 2  # Orta dəyərdən başlanır
    temp_s = 1
    # İlk tək termin (Delta və Delta ilə başlanır)
    result += s * diff_table[1][n // 2 - 1]
    # Qalan terminlər
    for i in range(1, n // 2):
        temp_s *= (s - i + 1) * (s + i - 1) / (2 * i)
        result += temp_s * (diff_table[2 * i][n // 2 - i - 1] + diff_table[2 * i][n // 2 - i]) / 2
        # Əlavə tək terminlər
        if i < n // 2 - 1:
            temp_s *= (s - i) / (i + 1)
            result += temp_s * diff_table[2 * i + 1][n // 2 - i - 1]
    return result
# Verilmiş nöqtələr
x_values = [0, 1, 2, 3, 4]
y_values = [1, 3, 9, 27, 81]
# Hesablanacaq nöqtə
x = 2.5
# Bessel interpolyasiya ilə nəticə
result = bessel_interpolation(x_values, y_values, x)
print(f"Nöqtə {x} üçün təxmini funksiya dəyəri: {result}")

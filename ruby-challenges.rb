# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN <-- Ty

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def oddeven carrot
    if carrot % 2 == 0
        "#{carrot} is even"
    else
        "#{carrot} is odd"
    end
end

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

p oddeven num1
p oddeven num2
p oddeven num3
# ➜  week-4-assessment-aVictorWXYZ git:(ruby_challenges) ✗ ruby ruby-challenges.rb
# "7 is odd"
# "42 is even"
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def spoon pie 
    pie.delete "aeiouAEIOU"
end
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
p spoon album1
p spoon album2
p spoon album3
# ➜  week-4-assessment-aVictorWXYZ git:(ruby_challenges) ✗ ruby ruby-challenges.rb+
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def lol apple
    if apple.upcase === apple.upcase.reverse
        "#{apple} is a palindrome"
    else
        "#{apple} is not a palindrome"
    end
end
palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p lol palindrome_tester1
p lol palindrome_tester2
p lol palindrome_tester3
# ➜  week-4-assessment-aVictorWXYZ git:(ruby_challenges) ✗ ruby ruby-challenges.rb
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"

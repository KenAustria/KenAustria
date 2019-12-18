class Bootcamp
  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = []
    @students = []
    @grades = Hash.new{ |h, k| h[k] = [] }
  end

  def name
    @name
  end

  def slogan
    @slogan
  end

  def teachers
    @teachers
  end

  def students
    @students
  end

  def hire(teacher)
    teachers.push(teacher)
  end

  def enroll(student)
    if @students.length < @student_capacity
      @students << student
      true
    else
      false
    end
  end

  def enrolled?(student)
    @students.include?(student)
  end

  def student_to_teacher_ratio()
    @students.length / @teachers.length
  end

  def add_grade(student, grade)
    if self.enrolled?(student) # if the student is enrolled
      @grades[student] << grade # access grades hash with students key and shovel grade students array
      return true
    else
      return false
    end
  end

  def num_grades(student)
    @grades[student].length
  end

  def average_grade(student)
    if self.enrolled?(student) && self.num_grades(student) > 0  # if student has at least 1 grade 
      grades = @grades[student] # access grades array
      sum = 0 # host count
      grades.each { |grade| sum += grade } # iterate grades array and increment sum with grade
      return sum / grades.length # explicitly return value or it will return nil
    end

    nil # student is not enrolled
  end
end


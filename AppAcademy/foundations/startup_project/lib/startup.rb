require "employee"

class Startup
  attr_reader :name, :funding, :salaries, :employees
  def initialize(name, funding, salaries)
    @name = name
    @funding = funding
    @salaries = salaries
    @employees = []
  end

  def valid_title?(title)
    @salaries.has_key?(title)
  end

  def >(startup)
    self.funding > startup.funding
  end

  def hire(name, title)
    if self.valid_title?(title) # if title is valid
      @employees << Employee.new(name, title) # add the new Employee instance to our employees array
    else
      raise "title is invalid"
    end
  end

  def size
    @employees.length
  end

  def pay_employee(employee)
    money_owed = @salaries[employee.title] # reference employee's salary
    if @funding >= money_owed # if funding has more money that what's owed
      employee.pay(money_owed) # pay employee
      @funding -= money_owed # subtract from funding
    else
      raise "no funding"
    end
  end

  def payday
    @employees.map { |employee| self.pay_employee(employee)}
  end

  def average_salary
    sum = 0
    @employees.each do |employee|
      sum += @salaries[employee.title]
    end

    sum / @employees.length
  end

  def close
    @employees = []
    @funding = 0
  end

  def acquire(startup)
    @funding += startup.funding # increment funding

    startup.salaries.each do |title, amount|
      if !salaries.has_key?(title) # check if title does not exist in our salaries
        @salaries[title] = amount # then add to our salaries
      end
    end

    @employees += startup.employees # increment employees, cannot << an array into another array
    startup.close
  end
end
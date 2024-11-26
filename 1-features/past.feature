Feature: We Movies



  Scenario Outline: As a user, I log in to weMovies app
    Given I am on the login screen
    When I click on the app
    Then I should land on the main screen

  Scenario Outline: As a user, I click on Now Playing Movie section
    Given I am on the main screen
    When I click on now playing section
    Then I should see the Now playing section

  Scenario Outline: As a user, I click on Top Rated
    Given I am on the main page
    When I click on Top Rated
    Then I should see the Top Rated section

  Scenario Outline: As a user, I click on Explore
    Given I am on the main page1
    When I click on Explore tab
    Then I should see landing on the explore tab
  
  Scenario Outline: As a user, I click on Upcoming
    Given I am on the main page2
    When I click on Upcoming tab
    Then I should see landing on the upcoming tab


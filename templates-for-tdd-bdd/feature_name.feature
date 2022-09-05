@testcase1

Feature: A feature to do something in algo
    Description that can be anything

    # The "@" annotations are tags
    # One feature can have multiple scenarios
    # The Description lines below the feature are just comment lines.

    Background:
        Given the dependencies to run the test
        And additional dependency if exists

    Scenario: A user used the feature in a particular way
        When user does "something" in algo, this happens in the api
        And additional conditions for the situation if exists
        Then these "results" are shown to the user
        And additional output if exists

    Scenario: A user used the feature in a different way
        When user does "something" differently in algo
        Then these "results" are shown to the user
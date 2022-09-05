import pytest
import pytest-bdd

# Import additional requirements

# Scenarios
@scenario('do_something.feature', 'Actual scenario in feature file')
def test_feature():
    pass

@given('Dependency description line in feature file')
def has_something():
    # setup the dependencies for the test
    pass

@given('Additional dependency description if exists')
def also_has():
    # setup for additional dependencies
    pass

@when('The conditions/trigger that starts the use of feature')
def step_in_feature():
    # something happens to execute the feature
    pass

@then('This is what happens when the feature is used')
def show_results():
    # get results and use asserts to verify the result
    pass

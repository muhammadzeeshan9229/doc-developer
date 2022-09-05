# Redshift Tables in Prod Schema

## Table Name: GROUPS
The **groups** table in the prod schema is used to store forecast related information on a customer item location level of detail. The forecast information includes restrictions, mins, max, facings etc. 

#### Clients:
- UPHE

#### Primary key:
- N/A (Stores data is appended as is)

#### Load Type:
- Brain 2.0 file config

#### Loaded by:
- SKYLIGHT_PA040_CORE_GROUPS
- SKYLIGHT_PA041_CORE_GROUPS
- SKYLIGHT_PA042_CORE_GROUPS
- SKYLIGHT_PA043_CORE_GROUPS
- SKYLIGHT_PA044_CORE_GROUPS
- SKYLIGHT_PA045_CORE_GROUPS
- SKYLIGHT_PA048_CORE_GROUPS

#### Attributes:
- **partner code:** Unknown skylight code
- **dbi:** Data base instance code
- **studio code:** Name of the studio (ex: UPHE)
- **customer id:** ID for the retailers from the skylight
- **customer code:** Code for the retailer (ex: WMU)
- **group id:** Skylight Unknown columm
- **type id:** Skylight Unknown columm
- **group name:** Skyklight label for Group defined for various reasons like mins, max etc
- **start date:** Date on which the group becomes active
- **end date:** Date on which the group becomes deactive
- **item id:** Skylight id for item
- **item code:** Code for the material
- **location id:** Skylight id for location
- **location code:** Code for the location
- **min qty:** Minimum allowed quantity for the item in store
- **max qty:** Maximum allowed quantity for the item in store
- **facing:** The number of user displayed product facings
- **function code:** Code to determine the function type of the group (Ex for uphe: RSTR denotes restriction, MM denotes min max)
- **enable flag:** Flag to determine if the information should be used or not
- **rule start date:** Unknown skylight column
- **rule end date:** Unknown skylight column
- **extract date:** Date on which the information is extracted from skylight
- **dp forecast flag:** Flag to determine if the material is forecastable or not and this flag denotes the override of restriction on an item code

**Notes:** The table is loaded on a daily basis from skylight. 

---

## Table Name: GROUPS_LATEST
The **groups_latest** table in the prod schema is used to store forecast related information on a customer item location level of detail. The forecast information includes restrictions, mins, max, facings etc. This table has only the latest group info. For historical groups info look at the doc for groups table above.

#### Clients:
- UPHE

#### Primary key:
- customer code
- item code
- location code

#### Load Type:
- Brain 2.0 file config

#### Loaded by:
- SKYLIGHT_PA040_CORE_GROUPS
- SKYLIGHT_PA041_CORE_GROUPS
- SKYLIGHT_PA042_CORE_GROUPS
- SKYLIGHT_PA043_CORE_GROUPS
- SKYLIGHT_PA044_CORE_GROUPS
- SKYLIGHT_PA045_CORE_GROUPS
- SKYLIGHT_PA048_CORE_GROUPS

#### Attributes:
- **partner code:** Unknown skylight code
- **dbi:** Data base instance code
- **studio code:** Name of the studio (ex: UPHE)
- **customer id:** ID for the retailers from the skylight
- **customer code:** Code for the retailer (ex: WMU)
- **group id:** Skylight Unknown columm
- **type id:** Skylight Unknown columm
- **group name:** Skyklight label for Group defined for various reasons like mins, max etc
- **start date:** Date on which the group becomes active
- **end date:** Date on which the group becomes deactive
- **item id:** Skylight id for item
- **item code:** Code for the material
- **location id:** Skylight id for location
- **location code:** Code for the location
- **min qty:** Minimum allowed quantity for the item in store
- **max qty:** Maximum allowed quantity for the item in store
- **facing:** The number of user displayed product facings
- **function code:** Code to determine the function type of the group (Ex for uphe: RSTR denotes restriction, MM denotes min max)
- **enable flag:** Flag to determine if the information should be used or not
- **rule start date:** Unknown skylight column
- **rule end date:** Unknown skylight column
- **extract date:** Date on which the information is extracted from skylight
- **dp forecast flag:** Flag to determine if the material is forecastable or not and this flag denotes the override of restriction on an item code

**Notes:** The table is loaded on a daily basis from skylight. 

---

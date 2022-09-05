# Redshift Tables in Demand Planning Schema

## Table Name: TITLE
The **title** table in the demand planning schema is used to store title information for CA region. It also stores item code specific metadata and other information used for determining comp titles(comparable titles).

#### Clients:
- WBE

#### Primary key:
- video version number
- item code

#### Load Type:
- Brain 2.0 file config 

#### Loaded by:
- WBE_DMDPLN_ITEM_METADATA
- WBE_DMDPLN_NA_ITEM_METADATA

#### Attributes:
- **title_id:** Unique ID for the title
- **title:** Full name of the title
- **series:** Unknown
- **series_id:** ID for the series
- **program_type:** New release or Catalog
- **item code:** Sku code
- **variation_on_sku:** ‘Y’ if the item code has variants and ‘N’ if not.
- **media_type:** Unknown
- **revenue_stream:** Unknown
- **package_type:** Unknown
- **title_type:** Unknown 
- **packaging_display_type:** Unknown
- **imdb:** Unknown
- **directors:** Name of the director for the title
- **actors:** Names of all the actors for the title
- **no_discs:** Unknown
- **rating:** Title rating from the movie certification board. Ex: PG
- **long_synopsis:** Unknown
- **short_synopsis:** Unknown
- **format:** Title format. Ex: DVD
- **release_date:** Street Date for the title
- **sku_life_cycle:** Status of the Sku. Ex: Active
- **genre_code:** List of title genres
- **box_office:** Box office value in USD for the title for CA region
- **release_category_code:** Unknown
- **fg_supplied_indicator:** Unknown
- **algo_batch_id:** Batch ID for the file that was loaded to title table
- **algo_created_date:** Date on which the file was processed.
- **video version number:** Unique code used by WBE to determine item

**Notes:** This table is used by the forecasters. Any changes made to this table should be accompanied by testing all the forecasters end to end.

---

## Table Name: TITLE_NA_HISTORY
The **title_na_history** table stores the item metadata info for the north america region(US and CA territories).

#### Clients:
- WBE

#### Primary key:
- video version number 
- country code

#### Load Type:
- Brain 2.0 file config 

#### Loaded by:
- WBE_DMDPLN_ITEM_METADATA
- WBE_DMDPLN_NA_ITEM_METADATA

#### Attributes:
- **video version number:** Unique code used by WBE to determine items
- **country code:** 'US' for United States and 'CA' for Canada 
- **box office:** Box office numbers for the particular country code
- **genres:** List of genre codes for the country
- **rating:** Certification rating provided by the country movie board
- **directors:** Name of the director
- **actors:** List of all actors in the title
- **algo_batch_id:** Id for the file processed for that row
- **algo_created_date:** Date on which the file was processed

**Notes:** This table stores all the data sent by the customer on a daily basis. When trying to get the data out of it, please make sure you get the row with latest algo_created_date for particular video version number and country code combination.

---

## Table Name: SHIP_RETURNS_NA_HISTORY
The table **ship_returns_na_history** stores the daily deltas of shipments and returns data for the North America(CA and US) regions. This is intended as a backup as well as an audit trail table of the daily deltas.

### Clients:
- WBE

#### Primary key:
- transaction id 

#### Load Type:
- Brain 2.0 file config

#### Loaded by:
- WBE_DMDPLN_SHIP_RETURNS_DAILY_NA

#### Attributes:
- **transaction id:** Unique Id for the transaction
- **territory:** Region i.e. 'US'/'CA'
- **customer code:** Unique code to determine the customer
- **location code:** Unique code to determine the location of the transaction
- **item code:** Unique code to determine the item
- **ship quantity:** The shipment/return quantity
- **ship date:** The date of the transaction
- **transaction type:** The type of the transaction which can be one of the following:
    - Sale
    - Return
    - Consignment Pickup
    - Consignment Fill-Up
    - Consignment Return
    - Consignment Issue
- **algo_batch_id:** Unique batch id of the processed file
- **algo_created_date:** Date on which the file was processed

**Notes:** This table stores all the data sent by the customer on a daily basis without deleting existing data.

---

## Table Name: LOAD_SHIP_RETURNS_NA_HISTORY
The table **load_ship_returns_na_history** stores the historical shipments and returns data for the North America(CA and US) regions. 

### Clients:
- WBE

#### Primary key:
- transaction id 

#### Load Type:
- Brain 2.0 file config

#### Loaded by:
- WBE_DMDPLN_SHIP_RETURNS_NA_HISTORY

#### Attributes:
- **transaction id:** Unique Id for the transaction
- **territory:** Region i.e. 'US'/'CA'
- **customer code:** Unique code to determine the customer
- **location code:** Unique code to determine the location of the transaction
- **item code:** Unique code to determine the item
- **ship quantity:** The shipment/return quantity
- **ship date:** The date of the transaction
- **transaction type:** The type of the transaction which can be one of the following:
    - Sale
    - Return
    - Consignment Pickup
    - Consignment Fill-Up
    - Consignment Return
    - Consignment Issue
- **algo_batch_id:** Unique batch id of the processed file
- **algo_created_date:** Date on which the file was processed

**Notes:** This table was used by the history pipeline for a one time load of data.

---

## Table Name: SHIPMENTS
The table **SHIPMENTS** stores all the shipments and returns data for the North America(CA and US) regions. 

### Clients:
- WBE

#### Primary key:
- transaction id 

#### Load Type:
- Brain 2.0 file config

#### Loaded by:
- WBE_DMDPLN_SHIP_RETURNS_DAILY_NA
- WBE_DMDPLN_SHIP_RETURNS_NA_HISTORY
- DMDPL_SKYLIGHT_PA032_ORDERS

#### Attributes:
- **transaction id:** Unique Id for the transaction
- **customer code:** Unique code to determine the customer
- **location code:** Unique code to determine the location of the transaction
- **item code:** Unique code to determine the item
- **ship quantity:** The shipment/return quantity
- **ship date:** The date of the transaction
- **transaction type:** The type of the transaction which can be one of the following:
    - Sale
    - Return
    - Consignment Pickup
    - Consignment Fill-Up
    - Consignment Return
    - Consignment Issue
- **document_type_code:** Unknown
- **algo_batch_id:** Unique batch id of the processed file
- **algo_created_date:** Date on which the file was processed
- **shipment_id**: Unknown

**Notes:** Also referred to as Shipment Master.

---

## Table Name: GROUPS
The **groups** table in the demandplanning schema is used to store forecast related information on a customer item location level of detail. The forecast information includes restrictions, mins, max, facings etc. 

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
The **groups_latest** table in the demandplanning schema is used to store forecast related information on a customer item location level of detail. The forecast information includes restrictions, mins, max, facings etc. This table has only the latest group info. For historical groups info look at the doc for groups table above.

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

## Table Name: PROMOTIONS
The **promotions** table in the demandplanning schema is used to store details regarding promotions that is directly sent from the customer. No modifications are done.

#### Clients:
- SPHE, UPHE and WBE

#### Primary key:
- customer code
- item code
- source promotion id

#### Load Type:
- Brain 2.0 file config (SPHE and UPHE)
- Algo measure (WBE)

#### Loaded by:
SPHE
- DEMAND_PLANNING_DAILY_PROMO_MEASURE
- DEMAND_PLANNING_DAILY_PROMOS
- DEMAND_PLANNING_DAILY_PROMO_VOLUMES

UPHE
- UPHE_PROMOTIONS_REGIE_DAILY
- UPHE_PROMOTIONS_NONREGIE_DAILY

WBE
- Upload Promotions measure in Algo

#### Attributes:
- **customer code:** Retailer unique identifier
- **item code:** Item unique identifier aka Material Number
- **goal_quantity:** Target sale quantity from the sales team of Customers(studio)
- **estimates_quantity:** Agreed to quanitity between the Customer(studio) and the Retailer
- **source_promotion_id:** Promotion unique identifier
- **promotion_name:** Name of the promotion
- **promotion_start_date:** Start date of the promotion
- **promotion_end_date:** End date of the promotion
- **in_store_date:** Target in store date of the product initial ship quantity
- **sku_in_corrugate:** Determines whether this product is shipped out a single or as a corrugate
- **replenishable_for_promotions:** Shows whether the promotion has multiple shipments or just the initial ship
- **planned_ship_quantity:** Goal and estimates is for New release items but the planned ship quantity is used for catalog items
- **territory:** Country code (US/CA)
- **sku_in_promo_status:** Status of the promotion (Approved, Cancelled etc.)
- **sku_status:** Status of the promotion (Approved, Cancelled etc.)- **corrugate_flag:** Same as sku_in_corrugate
- **algo_batch_id:** UUID assigned to identify the source file
- **algo_created_date:** Date on which the source file was processed
- **batch_id:** Reference back to the batch id from customer (studio and it applies only to SPHE)
- **last_updated:** Reference feed column from the customer (studio and it applies only to SPHE)
- **file_name:** Name of the source file
- **vol_batch_id:** Reference feed column from the customer (studio and it applies only to SPHE)
- **vol_file_name:** Reference feed column from the customer (studio and it applies only to SPHE)

**Notes:** None

---

## Table Name: PROMOTIONS_EXTENDED_{ENV}
The **promotions_extended_{env}** table in the demandplanning schema is used to store information obtained after additional processing on the promotions file. This processing includes determining promo types, forecast layer etc.

#### Clients:
- SPHE, UPHE and WBE

#### Primary key:
- customer code
- item code
- source promotion id

#### Load Type:
- Brain 2.0 file config (SPHE and UPHE)
- Algo measure (WBE)

#### Loaded by:
SPHE
- DEMAND_PLANNING_DAILY_PROMO_MEASURE
- DEMAND_PLANNING_DAILY_PROMOS
- DEMAND_PLANNING_DAILY_PROMO_VOLUMES

UPHE
- UPHE_PROMOTIONS_REGIE_DAILY
- UPHE_PROMOTIONS_NONREGIE_DAILY

WBE
- Upload Promotions measure in Algo

#### Attributes:
- **source_promotion_id:** Promotion unique identifier
- **item code:** Item unique identifier aka Material Number
- **user_id:** Last Algo user that updated the promotion
- **status:** Unknown (Not being used)
- **created_at:** The last edited date of the promotion by the Algo user
- **validated:** Confirmation of promotion (Linked to the validate button in the promo dashboard measure)
- **initial_ship_calculation:** Method on how the initial ship is calculated (STUDIO/ALGO)
- **additional_initial_wos:** Additional initial weeks of supply (Not being used)
- **system_replen:** Used for override replenishable flag for the promotion
- **confirm_delivery_by_date:** Override date for the in store date column
- **forecast_layer:** The line type in the forecast output file of 13 week shipment forecast
- **promo_type:** Type of the promotion (NR, PROMO etc.)
- **is_valid:** Validity of the promotion (Used to reduce the confusion caused by sky status columns)
- **in_inventory_date:** Calculated from the in store date (Planned based on the delivery date)
- **studio_replen_forecast:** Forecast from the Studio for replenishment for the promotion (Used only for UPHE)
- **customer code:** Retailer unique identifier
- **forecast_consumed:** Flag to determine if the initial ship has been consumed on this promotion (Tells us whether sales order have come in)
- **algo_initial_ship_value:** Algo calculated initial ship quantity
- **holiday_name:** Holiday name in the Promotion replenishment curve used to determine the forecast (Ex: Black friday, cyber monday etc.)

**Notes:** None

---
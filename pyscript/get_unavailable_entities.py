#===============================================================================
# Pyscript: Get All Unavailable Entities
# File: /config/pyscript/get_unavailable_entities.py
# Purpose: Find and track all entities with unavailable or unknown states
# Updated: 2025-10-27 - Fixed to work with latest Pyscript API
#===============================================================================

@service
def get_unavailable_entities():
    """
    Service to find all unavailable or unknown entities in Home Assistant.
    This creates a sensor with the count and list of unavailable entities.
    Call this service using: pyscript.get_unavailable_entities
    """
    
    # Initialize list to store unavailable entities
    unavailable_entities = []
    unknown_entities = []
    
    # Get all entity IDs from the state registry
    all_entity_ids = state.names()
    
    # Iterate through all entities and check their states
    for entity_id in all_entity_ids:
        # Get the current state of the entity
        entity_state = state.get(entity_id)
        
        # Skip if entity_state is None (shouldn't happen, but safety first)
        if entity_state is None:
            continue
            
        # Check if entity is unavailable
        if entity_state == "unavailable":
            # Get friendly name from attributes
            friendly_name = state.getattr(f"{entity_id}.friendly_name")
            if friendly_name is None:
                friendly_name = entity_id
                
            unavailable_entities.append({
                "entity_id": entity_id,
                "friendly_name": friendly_name,
                "state": "unavailable"
            })
        
        # Check if entity is unknown
        elif entity_state == "unknown":
            # Get friendly name from attributes
            friendly_name = state.getattr(f"{entity_id}.friendly_name")
            if friendly_name is None:
                friendly_name = entity_id
                
            unknown_entities.append({
                "entity_id": entity_id,
                "friendly_name": friendly_name,
                "state": "unknown"
            })
    
    # Combine both lists
    all_problematic = unavailable_entities + unknown_entities
    
    # Sort by entity_id for easier reading
    all_problematic.sort(key=lambda x: x["entity_id"])
    
    # Calculate counts
    unavailable_count = len(unavailable_entities)
    unknown_count = len(unknown_entities)
    total_count = len(all_problematic)
    
    # Set the state using the proper Pyscript state.set method
    state.set(
        "sensor.unavailable_entities_count",
        value=total_count,
        new_attributes={
            "friendly_name": "Unavailable Entities Count",
            "icon": "mdi:alert-circle-outline",
            "unit_of_measurement": "entities",
            "unavailable_count": unavailable_count,
            "unknown_count": unknown_count,
            "total_count": total_count,
            "unavailable_entities": unavailable_entities,
            "unknown_entities": unknown_entities,
            "all_problematic_entities": all_problematic,
            "last_updated": str(datetime.now())
        }
    )
    
    # Log results for debugging
    log.info(f"Unavailable Entities Scan Complete:")
    log.info(f"  - Unavailable: {unavailable_count}")
    log.info(f"  - Unknown: {unknown_count}")
    log.info(f"  - Total Problematic: {total_count}")
    
    # Return success message
    return {
        "success": True,
        "unavailable_count": unavailable_count,
        "unknown_count": unknown_count,
        "total_count": total_count
    }


#===============================================================================
# Alternative: Automatic trigger version
# This will run automatically every 5 minutes
#===============================================================================

@time_trigger("cron(*/5 * * * *)")
def auto_check_unavailable_entities():
    """
    Automatically check for unavailable entities every 5 minutes.
    This runs in the background without manual triggering.
    """
    # Call the main service function
    get_unavailable_entities()
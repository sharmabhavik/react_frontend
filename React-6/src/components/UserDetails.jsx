export const UserDetails = ({name, isOnline}) => {
    // If statement Rendering
    /* if(isOnline){
        return (
        <div>
            <h2>{name}</h2>
            <span>Status: Active</span>
            <p>Available for Chat</p>
            <button>Send Message</button>
        </div>
    )
    }
    
    return (
        <div>
            <h2>{name}</h2>
            <span>Status: Inactive</span>
            <p>Currently not Available</p>
            <small>Please Contact Later</small>
        </div>
    ) */

    // Ternary Operator
    return (
        <div>
            <h2>{name}</h2>
            <span>{isOnline?"Status: Active":"Status: Inactive"}</span>
            <p>{isOnline?"Available for Chat":"Not Available"}</p>
            {isOnline?(<button>Send Message</button>):(<small>Chat Later</small>)}
        </div>
    )

}


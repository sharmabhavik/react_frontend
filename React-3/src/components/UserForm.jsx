/* export const userForm = () => {
    return (
        <form>
            <input placeholder="Enter Your Name">
            <br>
            <input placeholder="Enter Your Number">
        </form>
    )
} */

// Error because of not using closing Tag - <input>

export const userForm = () => {
    return (
        <form>
            <input placeholder="Enter Your Name" />
            <br />
            <input placeholder="Enter Your Number" />
        </form>
    )
}

// Now we have used here <input /> so no errors
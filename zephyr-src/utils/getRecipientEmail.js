const getRecipientEmail = (users, UserLoggedIn) => (
    users?.filter(userToFilter=> userToFilter != userLoggedIn?.email)[0]
)

export default getRecipientEmail;


const UserCard = ({userInfo}) => {
    return (
        <div style={{width: '250px',
            height: "300px",
            padding: '10px',
            boxShadow: '1px 1px 5px black',
            border: '1px black solid',
        }}>
            {/*<img style= {{ width: '200px', height: "170px", objectFit: 'fill', src={"https://c8.alamy.com/comp/2PWFXDF/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWFXDF.jpg"}}/>*/}
            <h1>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
            <p>{userInfo.phone}</p>

        </div>
    );
};

export default UserCard;
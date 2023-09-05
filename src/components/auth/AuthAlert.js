import { Alert, Button, Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AuthAlert = () => {
    return (
        <div>
            <div className="text-center p-4">
                <Card sx={{ padding: 5 }}>
                    <div className="mb-5">
                        <Alert
                            severity="error"
                            sx={{ justifyContent: "center" }}
                        >
                            <Typography variant="h5">
                                You must have an account to book any room
                            </Typography>
                        </Alert>
                    </div>
                    <Link to={"/auth"}>
                        <Button variant="contained">Login/SignUp</Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default AuthAlert;

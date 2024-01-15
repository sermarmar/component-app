import { Route, Routes } from "react-router-dom";
import { ButtonsComponent } from "../../components/ButtonsComponent";
import { InputsComponent } from "../../components/InputsComponent";
import { Container } from "@mui/material";

export const ContentLayout = () => {

    return(
        <>
            <Container>
                <Routes>
                    <Route path="/buttons" element={ <ButtonsComponent/> } />
                    <Route path="/inputs" element={ <InputsComponent/> } />
                </Routes>
            </Container>
        </>
    )

}
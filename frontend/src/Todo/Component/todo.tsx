import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

type TodoProps = {
    handleContentChange: (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    handleRegister: () => void
}

const CustomBox = styled(Box)(({ theme }) => ({
    width: '30%'
}));

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
    const { handleContentChange = () => undefined, handleRegister = () => undefined } = props;

    return (
        <>
            <CustomBox>
                <TextField onChange={handleContentChange}
                    margin='dense'
                    id='name'
                    label='内容'
                    fullWidth
                    autoFocus />
                <Button onClick={handleRegister}>追加</Button>
            </CustomBox>
        </>
    )
};

export default Todo;

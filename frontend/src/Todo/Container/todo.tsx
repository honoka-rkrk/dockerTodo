import React, { useState, useCallback, useEffect } from 'react';
import CompTodo from '../Component/todo';
import { postApi, getApi } from '../../Api/api';
import { TodoType } from './type';
const Todo: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [datas, setDatas] = useState<Array<TodoType>>([]);

    //内容が変更されたとき
    const handleContentChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setContent(e.target.value);
    };

    //取得
    useEffect(() => {
        const getTodos = async () => {
            const api = await getApi('/api/todos/');
            if (api.success) {
                console.log(api.data);
                setDatas(api.data);
            }
        }
        getTodos();
    }, [])

    //追加ボタン
    const handleRegister = useCallback(
        () => {
            const registerApi = async () => {
                if (content !== '') {
                    const api = await postApi('/api/todos/', {
                        content: content
                    });
                    if (api.success) {
                        console.log('success');
                    } else {
                        console.log('error');
                    }
                }
            }
            registerApi();
            getTodos();
        },
        [content],
    )

    const getTodos = async () => {
        const api = await getApi('/api/todos/');
        if (api.success) {
            console.log(api.data);
            setDatas(api.data);
        }
    }

    return (<CompTodo handleContentChange={handleContentChange} handleRegister={handleRegister} datas={datas} />);
};

export default Todo;

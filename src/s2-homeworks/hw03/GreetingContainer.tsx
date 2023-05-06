import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string)=> void
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    if (name.trim() === '') {
        setError('Name is required')
    } else {
        addUserCallback(name)
        setName('')
        setError('')
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}
}
export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError('Name is required')
    }
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement>, addUser: (name:string)=> void, name:string) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser(name);
    }
} ;

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, ()=> addUser, name);
    }

    const totalUsers = users.length
    const lastUserName = users.length > 0 ? users[users.length - 1].name: '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

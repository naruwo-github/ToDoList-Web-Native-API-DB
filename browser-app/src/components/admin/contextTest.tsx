import React, { useState } from "react"

/*
* このファイルはStateバケツリレーの例とそれをContextで解決する例
*/

// Contextの宣言
const MyContext = React.createContext('');

export default function ContextTest () {
    
    // バケツリレーするState
    const [testString, setTestString] = useState<string>('test')
    
    // Stateを書き換える関数
    function lengthenTestString (): void {
        setTestString(prevState => prevState + '+')
    }

    return (
        <MyContext.Provider value={testString}>
            <TestChild1
                // バケツリレーその①
                testString={testString}
            />
            <label
                onClick={lengthenTestString}
            >
                Lengthen
            </label>
        </MyContext.Provider>
    )
}

function TestChild1 ({
    testString,
}: {
    testString: string,
}) {
    return (
        <div>
            <h2>This is h2.</h2>
            <TestChild2
                // バケツリレーその②
                testString={testString}
            />
        </div>
    )
}

function TestChild2 ({
    testString,
}: {
    testString: string,
}) {
    return (
        <div>
            <h3>This is h3.</h3>
            <TestChild3
                // バケツリレーその③
                testString={testString}
            />
        </div>
    )
}

function TestChild3 ({
    testString,
}: {
    testString: string,
}) {
    return (
        <div>
            <h4>This is h4.</h4>
            <TestChild4
                // バケツリレーその④
                testString={testString}
            />
        </div>
    )
}

function TestChild4 ({
    testString,
}: {
    testString: string,
}) {
    // ContextからtestStringを受け取る
    const testStringFromContext = React.useContext(MyContext)

    return (
        <div>
            <h5>{testString}</h5>
            {/* 上のtestStringとtestStringFromContextが同じオブジェクトを参照していることが確認できる！！！ */}
            <h5>{testStringFromContext}</h5>
        </div>
    )
}
import React from "react"

const testString: string = 'test'

export default function ContextTest () {
  return (
    <TestChild1
        testString={testString}
    />
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
    return (
        <div>
            <h5>{testString}</h5>
        </div>
    )
}
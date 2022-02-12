const API_URL: string = 'http://localhost:4000/tasks/'
const headers: HeadersInit = {
  'Content-Type': 'application/json'
}

// GETリクエストの土台
function get (url: string): Promise<any> {
  return fetch(
    url,
    {
      mode: 'cors',
      method: 'GET'
    }
    ).then(res => res.json())
}

// POSTリクエストの土台
function post(url: string, body: string): Promise<any> {
  return fetch(
    url,
    {
      mode: 'cors',
      method: 'POST',
      headers: headers,
      body: body
    }
    ).then(res => res.json())
}

export function getAllTasks (): Promise<any> {
  return get(API_URL)
}

export function getTaskById (taskId: string): Promise<any> {
  return get(`${API_URL}${taskId}`)
}

export function createTask (taskName: string): Promise<any> {
  return post(
    API_URL,
    JSON.stringify({ name: taskName })
  )
}

// DELETEリクエスト
export function deleteTaskById (taskId: string): Promise<any> {
  return fetch(
    `${API_URL}${taskId}`,
    {
      mode: 'cors',
      method: 'DELETE'
    }
    ).then(res => res.json())
}

// PUTリクエスト
export function putTaskById (taskId: string, taskName: string): Promise<any> {
  return fetch(
    `${API_URL}${taskId}`,
    {
      mode: 'cors',
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        name: taskName
      })
    }
    ).then(res => res.json())
}

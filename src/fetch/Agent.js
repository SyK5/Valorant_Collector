const AgentF = async() => {
    const AgentUrl = 'https://valorant-api.com/v1/agents';
    const response = await fetch(AgentUrl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    const json = await response.json();
    return json.data;
}

export default AgentF;
import json
import pytest
from agent.tools.utils.mcp_tool_executor import MCPToolExecutor

def test_mcp_success_envelope():
    ex = MCPToolExecutor(custom_tools={})
    tr = ex._create_success_result({"foo": "bar"})
    envelope = json.loads(tr.content)
    assert envelope["ok"] is True
    assert envelope["status"] == "success"
    assert "summary" in envelope
    assert envelope["data"] == {"foo": "bar"}
    assert envelope["error"] is None
    assert tr.metadata.get("envelope") == envelope

def test_mcp_error_envelope():
    ex = MCPToolExecutor(custom_tools={})
    tr = ex._create_error_result("something went wrong")
    envelope = json.loads(tr.content)
    assert envelope["ok"] is False
    assert envelope["status"] == "error"
    assert "summary" in envelope
    assert envelope["data"] is None
    assert "error" in envelope and envelope["error"] == "something went wrong"
    assert tr.metadata.get("envelope") == envelope
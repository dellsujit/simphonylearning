export function OnOpsBeginCheckEvent() {
    const context = SimphonyExtensibilityAPI.Environment.Context;
    context.ShowMessage('OpsBeginCheckEvent triggered!');
}

export function OnOpsInitEvent() {
    const context = SimphonyExtensibilityAPI.Environment.Context;
    context.ShowMessage('OpsInitEvent triggered!');
}

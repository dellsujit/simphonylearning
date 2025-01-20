const _api = SimphonyExtensibilityAPI;
const context = _api.Environment.Context;
const _eventing = _api.Eventing;
import '../button/testButton';
import { OnOpsInitEvent } from '../events/opsInitEvent';
import { OnOpsBeginCheckEvent } from '../events/opsBeginCheckEvent';
import { OnOpsTmedPreviewEvent } from '../events/opsTmedPreviewEvent';
// Subscribe to Ops events
_eventing.SubscribeToEvent('OpsInitEvent', OnOpsInitEvent);
_eventing.SubscribeToEvent('OpsBeginCheckEvent', OnOpsBeginCheckEvent);
_eventing.SubscribeToEvent('OpsTmedPreviewEvent', OnOpsTmedPreviewEvent);

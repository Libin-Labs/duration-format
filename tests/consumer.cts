import * as api from '@lp-labs/duration-format';
import { formatDuration } from '@lp-labs/duration-format';
console.log(formatDuration(90061001));
// @ts-expect-error invalid argument must be rejected by declarations
api.formatDuration('one second');

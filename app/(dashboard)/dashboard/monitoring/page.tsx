import { getMonitorLinksAndHistories } from '@/lib/db/queries';
export default async function MonitoringPage() {
  const monitorData = await getMonitorLinksAndHistories();
  return <div>Monitoring</div>;
}

import { requireUser } from "@/lib/auth";

import { ProfileForm } from "@/components/profile/profile-form";

export default async function ProfilePage() {
  const user = await requireUser();

  return <ProfileForm user={user} />;
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-20 px-10 bg-white dark:bg-black sm:items-start">

        {/* HEADER LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={110}
            height={30}
            priority
          />
          <p className="text-sm text-zinc-500">Student Profile Dashboard</p>
        </div>

        {/* PROFILE SECTION */}
        <div className="flex flex-col sm:flex-row items-center gap-10 w-full">

          {/* IMAGE PROFILE */}
          <Image
            src="/fotoku.jpg"
            alt="Profile Photo"
            width={180}
            height={180}
            className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 object-cover"
          />

          {/* INFO */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Sirfaratih
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400">
              NIM: <span className="font-medium">2341720072</span>
            </p>

            <p className="text-zinc-600 dark:text-zinc-400">
              Prodi : D4 Teknik Informatika 
            </p>
             <p className="text-zinc-600 dark:text-zinc-400">
              Jurusan : Teknologi Informasi
            </p>

            <p className="text-zinc-600 dark:text-zinc-400">
              Politeknik Negeri Malang
            </p>
          </div>
        </div>

        {/* INTEREST SECTION */}
        <div className="mt-10 w-full">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Tech Interests
          </h2>

          <div className="flex flex-wrap gap-3 mt-3">
            {["Next.js", "Docker", "AWS", "IoT", "Cloud Computing", "System Analysis"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECT SECTION */}
        <div className="mt-10 w-full">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Projects
          </h2>

          <div className="mt-4 space-y-4">

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold">Sistem Rekomendasi Magang</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Web system untuk rekomendasi magang berbasis user profile & skill matching.
              </p>
            </div>
             <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold">Sistem Prestasi Mahasiswa</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Web system untuk mengelola dan memantau prestasi akademik mahasiswa.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold">Aplikasi SapaWarga</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Aplikasi mobile untuk memfasilitasi komunikasi dan layanan antar warga di lingkungan kampus.
              </p>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-xs text-zinc-500">
          Built with Next.js + Tailwind + Docker CI/CD
        </div>

      </main>
    </div>
  );
}